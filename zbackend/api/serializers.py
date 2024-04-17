from rest_framework import serializers
from .models import FavoriteRecipes
from .models import DietaryPreferences
from .models import User

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

class FavoriteRecipeSerializer(serializers.ModelSerializer):
    preference = serializers.PrimaryKeyRelatedField(queryset=DietaryPreferences.objects.all())
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    class Meta:
        model = FavoriteRecipes
        fields = ['servings', 'preference', 'user', 'id', 'name', 'image', 'minutes', 'likes']