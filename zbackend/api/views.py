from django.contrib.auth import get_user_model
from rest_framework import status, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

# from rest_framework.permissions import IsAuthenticated, BasePermission
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


class IsOwner(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.user == request.user


class DietaryPreferenceViewSet(viewsets.ModelViewSet):
    queryset = DietaryPreference.objects.all()
    serializer_class = DietaryPreferenceSerializer
    permission_classes = []

    def get_queryset(self):
        user_id = self.kwargs["user_pk"]
        return DietaryPreference.objects.filter(user_id=user_id)


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
    permission_classes = []

    def get_queryset(self):
        user_id = self.kwargs["user_pk"]
        return ShoppingList.objects.filter(user_id=user_id)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class MacrosViewSet(viewsets.ModelViewSet):
    queryset = Macro.objects.all()
    serializer_class = MacrosSerializer
    permission_classes = []

    def get_queryset(self):
        user_id = self.kwargs["user_pk"]
        return Macro.objects.filter(user_id=user_id)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


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
