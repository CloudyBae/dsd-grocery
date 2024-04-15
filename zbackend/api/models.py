from django.db import models
from django.contrib.auth.models import User


class DietaryPreferences(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    preference_name = models.CharField(max_length=100)
    is_selected = models.BooleanField(default=False)


class Ingredients(models.Model):
    quantity_available = models.DecimalField(max_digits=10, decimal_places=2)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    preference_id = models.ForeignKey(
        DietaryPreferences, on_delete=models.SET_NULL, null=True
    )


class ShoppingList(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    ingredient_id = models.ForeignKey(Ingredients, on_delete=models.CASCADE)
    quantity = models.DecimalField(max_digits=10, decimal_places=2)
    is_purchased = models.BooleanField(default=False)


class FavoriteRecipes(models.Model):
    servings = models.IntegerField()
    preference_id = models.ForeignKey(DietaryPreferences, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)


class Macros(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    recipe_id = models.ForeignKey(FavoriteRecipes, on_delete=models.CASCADE)
    macro_type = models.CharField(max_length=50)
    ingredient_id = models.ForeignKey(Ingredients, on_delete=models.CASCADE)
    quantity = models.DecimalField(max_digits=10, decimal_places=2)
