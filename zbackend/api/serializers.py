# Example code of api/serializer.py
# Remove this example and write your own code
"""
from rest_framework import serializers
from .models import Ingredient

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['ingredientId']
"""
"""
from rest_framework import serializers
from . import models


class ShoppingListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingList
        fields = ["id", "user_id", "ingredient_id", "quantity", "is_purchased"]
"""
