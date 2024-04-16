from rest_framework import serializers
from .models import Ingredients, ShoppingList

class ShoppingListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingList
        fields = ['id', 'ingredient', 'quantity', 'is_purchased' ]

class IngredientSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Ingredients
        fields = ['id', 'quantiy', 'user', 'preference']