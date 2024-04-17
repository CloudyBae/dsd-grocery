from rest_framework import status, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, BasePermission

from .models import FavoriteRecipes, User, ShoppingList, Macros
from .serializers import (
    FavoriteRecipeSerializer,
    ShoppingListSerializer,
    MacrosSerializer,
)


class IsOwner(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.user == request.user


class ShoppingListViewSet(viewsets.ModelViewSet):
    queryset = ShoppingList.objects.all()
    serializer_class = ShoppingListSerializer
    permission_classes = [IsAuthenticated, IsOwner]

    def get_queryset(self):
        user_id = self.kwargs["user_pk"]
        return ShoppingList.objects.filter(user_id=user_id)


class MacrosViewSet(viewsets.ModelViewSet):
    queryset = Macros.objects.all()
    serializer_class = MacrosSerializer
    permission_classes = [IsAuthenticated, IsOwner]

    def get_queryset(self):
        user_id = self.kwargs["user_pk"]
        return Macros.objects.filter(user_id=user_id)


@api_view(["GET"])
def get_favorite_recipes(request, user_id):
    try:
        user = User.objects.get(pk=user_id)
    except User.DoesNotExist:
        return Response(
            {"message": "User does not exist"}, status=status.HTTP_404_NOT_FOUND
        )

    favorite_recipes = FavoriteRecipes.objects.filter(user_id=user)
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
        favorite_recipe = FavoriteRecipes.objects.get(user=user, id=favorite_recipe_id)
    except (User.DoesNotExist, FavoriteRecipes.DoesNotExist):
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
        favorite_recipe = FavoriteRecipes.objects.get(user=user, id=favorite_recipe_id)
    except (User.DoesNotExist, FavoriteRecipes.DoesNotExist):
        return Response(
            {"message": "Favorite recipe does not exist"},
            status=status.HTTP_404_NOT_FOUND,
        )

    favorite_recipe.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
