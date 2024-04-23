import requests
import os
from datetime import datetime

from django.contrib.auth import get_user_model
from rest_framework import status, viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from rest_framework.permissions import AllowAny
from rest_framework.permissions import BasePermission
from django.http import JsonResponse
from .external_apis import (
    get_recipes_by_dietary_preferences,
    get_recipe_information,
    get_recipe_summary,
    get_ingredient_by_search,
    get_ingredient_information,
    get_nutrition_information,
)
from .models import (
    FavoriteRecipe,
    ShoppingList,
    Macro,
    Ingredient,
    DietaryPreference,
    PlannedRecipe,
)
from .serializers import (
    FavoriteRecipeSerializer,
    ShoppingListSerializer,
    MacrosSerializer,
    IngredientSerializer,
    DietaryPreferenceSerializer,
    PlannedRecipeSerializer,
)

User = get_user_model()


class AllowUpdateWithoutAuthentication(BasePermission):
    def has_permission(self, request, view):
        return request.method in ["PUT", "PATCH", "POST", "GET"]


class DietaryPreferenceViewSet(viewsets.ModelViewSet):
    queryset = DietaryPreference.objects.all()
    serializer_class = DietaryPreferenceSerializer
    permission_classes = [AllowUpdateWithoutAuthentication]

    def get_queryset(self):
        user = self.request.user
        return DietaryPreference.objects.filter(user=user)


class IngredientViewSet(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
    permission_classes = []

    def get_queryset(self):
        user_id = self.kwargs["user_pk"]
        return Ingredient.objects.filter(user_id=user_id)


class PlannedRecipeViewSet(viewsets.ModelViewSet):
    queryset = PlannedRecipe.objects.all()
    serializer_class = PlannedRecipeSerializer
    permission_classes = []

    def get_queryset(self):
        user_id = self.kwargs["user_pk"]
        return PlannedRecipe.objects.filter(user_id=user_id)


class ShoppingListViewSet(viewsets.ModelViewSet):
    queryset = ShoppingList.objects.all()
    serializer_class = ShoppingListSerializer
    permission_classes = [AllowAny]

    def perform_create(self, request, *args, **kwargs):
        data = request.data
        name = data.get("name")

        query = Ingredient.objects.filter(name=name)
        ingredient_values = query.values_list()
        for item in ingredient_values:
            ing_name = item[1]
            if name == ing_name:
                data["is_purchased"] = True

        serializer = ShoppingListSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MacrosViewSet(viewsets.ModelViewSet):
    queryset = Macro.objects.all()
    serializer_class = MacrosSerializer
    permission_classes = []

    def list(self, request, *args, **kwargs):
        today = datetime.now().date()
        queryset = self.get_queryset().filter(date=today)
        my_values = queryset.values_list()

        decimal_values = []
        for item in my_values:
            values = [
                float(val.strip("Decimal(')"))
                for val in item[5].strip("[]").split(", ")
            ]
            decimal_values.append(values)

        sums = [0] * len(decimal_values[0])
        for values in decimal_values:
            for i, val in enumerate(values):
                sums[i] += val

        response_data = {"Protein": sums[0], "Fat": sums[1], "Carbs": sums[2]}

        return Response(response_data, status=status.HTTP_200_OK)

    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            serializer.save(user=self.request.user)
        else:
            serializer.save()


@api_view(["GET"])
@permission_classes([AllowAny])
def get_shopping_list(request, user_id, recipe_id):
    shopping_lists = ShoppingList.objects.filter(user_id=user_id, recipe_id=recipe_id)
    serializer = ShoppingListSerializer(shopping_lists, many=True)
    return Response(serializer.data)


@api_view(["PUT"])
@permission_classes([AllowAny])
def update_dietary_preference(request, user_id, preference_id):
    try:
        dietary_preference = DietaryPreference.objects.get(
            user_id=user_id, preference_id=preference_id
        )
    except DietaryPreference.DoesNotExist:
        return Response(
            {"message": "Dietary preference does not exist"},
            status=status.HTTP_404_NOT_FOUND,
        )

    serializer = DietaryPreferenceSerializer(
        dietary_preference, data=request.data, partial=True
    )
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def get_favorite_recipes(request, user_id):
    try:
        user = User.objects.get(pk=user_id)
    except User.DoesNotExist:
        return Response(
            {"message": "User does not exist"}, status=status.HTTP_404_NOT_FOUND
        )

    favorite_recipes = FavoriteRecipe.objects.filter(user_id=user)
    serializer = FavoriteRecipeSerializer(favorite_recipes, many=True)
    return Response(serializer.data)


@api_view(["POST"])
def save_favorite_recipe(request, user_id):
    try:
        user = User.objects.get(pk=user_id)
    except User.DoesNotExist:
        return Response(
            {"message": "User does not exist"}, status=status.HTTP_404_NOT_FOUND
        )

    serializer = FavoriteRecipeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["PUT"])
def update_favorite_recipe(request, user_id, favorite_recipe_id):
    print(user_id)
    try:
        user = User.objects.get(pk=user_id)
        favorite_recipe = FavoriteRecipe.objects.get(user=user, id=favorite_recipe_id)
    except (User.DoesNotExist, FavoriteRecipe.DoesNotExist):
        return Response(
            {"message": "Favorite recipe does not exist"},
            status=status.HTTP_404_NOT_FOUND,
        )

    serializer = FavoriteRecipeSerializer(favorite_recipe, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["DELETE"])
def delete_favorite_recipe(request, user_id, favorite_recipe_id):
    try:
        user = User.objects.get(pk=user_id)
        favorite_recipe = FavoriteRecipe.objects.get(user=user, id=favorite_recipe_id)
    except (User.DoesNotExist, FavoriteRecipe.DoesNotExist):
        return Response(
            {"message": "Favorite recipe does not exist"},
            status=status.HTTP_404_NOT_FOUND,
        )

    favorite_recipe.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(["GET"])
def get_filtered_recipes(request, dietary_preference):
    recipes_data = get_recipes_by_dietary_preferences(dietary_preference)
    print("recipes_data: ", recipes_data)

    if "results" in recipes_data:
        recipes = recipes_data["results"]
    else:
        return JsonResponse({"error": "No recipes found"}, status=404)

    filtered_recipes = []

    for recipe in recipes:
        filtered_recipe = {
            "name": recipe["title"],
            "cooking_time": recipe.get("readyInMinutes", ""),
            "ingredient_count": len(recipe.get("extendedIngredients", [])),
            "ingredients": [
                ingredient["original"]
                for ingredient in recipe.get("extendedIngredients", [])
            ],
            "instructions": recipe.get("instructions", ""),
            "macros": {
                "calories": recipe.get("nutrition", {}).get("calories", ""),
                "protein": recipe.get("nutrition", {}).get("protein", ""),
                "fat": recipe.get("nutrition", {}).get("fat", ""),
                "carbohydrates": recipe.get("nutrition", {}).get("carbs", ""),
            },
            "image": recipe.get("image", ""),
            "image_type": recipe.get("imageType", ""),
            "recipe_id": recipe.get("id", ""),
            "serving_size": recipe.get("servings", ""),
        }
        filtered_recipes.append(filtered_recipe)

    return JsonResponse(filtered_recipes, safe=False)


@api_view(["GET"])
def get_recipe_info(request, recipe_id):
    recipe_info = get_recipe_information(recipe_id)
    return JsonResponse(recipe_info)


@api_view(["GET"])
def get_recipe_sumary_info(request, recipe_id):
    sumary_info = get_recipe_summary(recipe_id)
    return JsonResponse(sumary_info)


@api_view(["GET"])
def get_ingredient_search(request, query):
    searched_ingredient = get_ingredient_by_search(query)
    return JsonResponse(searched_ingredient)


@api_view(["GET"])
def get_ingredient_informations(request, ingredient_id):
    searched_ingredient = get_ingredient_information(ingredient_id)
    return JsonResponse(searched_ingredient)


@api_view(["GET"])
def get_nutrition_informations(request, recipe_id):
    nutrition_widget = get_nutrition_information(recipe_id)
    return JsonResponse(nutrition_widget)


@api_view(["POST"])
def find_recipes(request, user_id):
    ingredient = request.data.get("ingredient")
    meal_type = request.data.get("meal_type")
    date_for = request.data.get("date_for")

    api_key = os.getenv("SPOONACULAR_API_KEY")
    endpoint = "https://api.spoonacular.com/recipes/complexSearch?"
    params = {
        "apiKey": api_key,
        "includeIngredients": ingredient,
        "type": meal_type,
        "instructionsRequired": True,
        "addRecipeInformation": True,
        "addRecipeNutrition": True,
        "number": 10,
    }

    diet_list = []
    diet_query = DietaryPreference.objects.filter(user=user_id, is_selected=True)
    diet_values = diet_query.values_list()
    for item in diet_values:
        diet_name = item[3]
        diet_list.append(diet_name)

    diet_string = ",".join(diet_list)
    params["diet"] = diet_string

    response = requests.get(endpoint, params=params)
    if response.status_code == 200:
        results = response.json().get("results", [])

        recipe_list = []
        for recipe in results:
            ingredients = recipe.get("nutrition").get("ingredients")
            recipe_data = {
                "recipe_id": recipe.get("id"),
                "image": recipe.get("image"),
                "name": recipe.get("title"),
                "ingredient_count": len(ingredients),
                "time": recipe.get("readyInMinutes"),
                "date_for": date_for,
            }
            recipe_list.append(recipe_data)

        return Response(recipe_list)

    return Response({"error": "Failed to fetch recipes"}, status=response.status_code)
