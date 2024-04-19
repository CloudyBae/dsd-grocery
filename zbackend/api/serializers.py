from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import (
    FavoriteRecipe,
    DietaryPreference,
    Ingredient,
    ShoppingList,
    Macro,
)

User = get_user_model()


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ["id", "name", "quantity", "user", "preference"]
        extra_kwargs = {"user": {"read_only": True}}


class ShoppingListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingList
        fields = ["id", "user", "ingredient", "quantity", "is_purchased"]
        extra_kwargs = {"user": {"read_only": True}, "ingredient": {"required": True}}


class MacrosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Macro
        fields = ["id", "user", "recipe", "macro_type", "ingredient", "quantity"]
        extra_kwargs = {"user": {"read_only": True}}


class FavoriteRecipeSerializer(serializers.ModelSerializer):
    preference = serializers.PrimaryKeyRelatedField(
        queryset=DietaryPreference.objects.all()
    )
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = FavoriteRecipe
        fields = [
            "servings",
            "preference",
            "user",
            "id",
            "name",
            "image",
            "minutes",
            "likes",
        ]
