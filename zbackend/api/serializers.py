from rest_framework import serializers
from .models import ShoppingList, Ingredients


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredients
        fields = ["id", "quantity_available", "preference"]


class ShoppingListSerializer(serializers.ModelSerializer):
    ingredient = IngredientSerializer(read_only=True)

    class Meta:
        model = ShoppingList
        fields = ["id", "user", "ingredient", "quantity", "is_purchased"]
