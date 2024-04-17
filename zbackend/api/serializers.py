from rest_framework import serializers
from .models import FavoriteRecipes, DietaryPreferences, User, Ingredients, ShoppingList

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredients
        fields = ["id", "quantity_available", "preference"]


class ShoppingListSerializer(serializers.ModelSerializer):
    ingredient = IngredientSerializer(read_only=True)

    class Meta:
        model = ShoppingList
        fields = ["id", "user", "ingredient", "quantity", "is_purchased"]


class FavoriteRecipeSerializer(serializers.ModelSerializer):
    preference = serializers.PrimaryKeyRelatedField(
        queryset=DietaryPreferences.objects.all()
    )
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = FavoriteRecipes
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

