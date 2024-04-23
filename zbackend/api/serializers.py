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
        fields = ["user", "preference_id", "preference_name", "is_selected"]


class PlannedRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlannedRecipe
        fields = ["user", "date_for", "recipe_id", "name"]


class IngredientSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Ingredient
        fields = ["name", "image", "quantity", "user"]


class ShoppingListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingList
        fields = ["recipe_id", "user", "is_purchased", "name", "image", "product_id"]


class MacrosSerializer(serializers.ModelSerializer):
    macro_names = serializers.ListField(child=serializers.CharField())
    quantities = serializers.ListField(
        child=serializers.DecimalField(max_digits=10, decimal_places=2)
    )

    class Meta:
        model = Macro
        fields = ["date", "user", "recipe_id", "macro_names", "quantities"]


class FavoriteRecipeSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = FavoriteRecipe
        fields = [
            "name",
            "servings",
            "name",
            "image",
            "minutes",
            "likes",
            "recipe_id",
            "user",
        ]
