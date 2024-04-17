from rest_framework import serializers
from .models import FavoriteRecipes
from .models import DietaryPreferences
from .models import User

class FavoriteRecipeSerializer(serializers.ModelSerializer):
    preference = serializers.PrimaryKeyRelatedField(queryset=DietaryPreferences.objects.all())
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = FavoriteRecipes
        fields = ['servings', 'preference', 'user', 'id', 'name', 'image', 'minutes', 'likes']

