from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import (
    FavoriteRecipe,
    DietaryPreference,
    Ingredient,
    ShoppingList,
    Macro,
    PlannedRecipe,
)

User = get_user_model()


class DietaryPreferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = DietaryPreference
        fields = ["id", "user", "preference_id", "preference_name", "is_selected"]
        extra_kwargs = {"user": {"read_only": True}}


class PlannedRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlannedRecipe
        fields = ["id", "user", "date_for"]
        extra_kwargs = {"user": {"read_only": True}}


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ["id", "name", "image", "quantity", "user"]
        extra_kwargs = {"user": {"read_only": True}}


class ShoppingListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingList
        fields = ["id", "user", "quantity", "is_purchased", "name", "image", "product_id"]
        extra_kwargs = {"user": {"read_only": True}}


class MacrosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Macro
        fields = ["id", "user", "recipe_id", "macro_name", "quantity"]
        extra_kwargs = {"user": {"read_only": True}}


class FavoriteRecipeSerializer(serializers.ModelSerializer):
    preference = serializers.PrimaryKeyRelatedField(
        queryset=DietaryPreference.objects.all()
    )
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = FavoriteRecipe
        fields = [
            "id",
            "servings",
            "preference",
            "user",
            "name",
            "image",
            "minutes",
            "likes",
            "recipe_id"
        ]
