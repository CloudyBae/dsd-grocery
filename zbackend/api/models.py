from django.conf import settings
from django.db import models


class DietaryPreference(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="dietary_preferences_entries",
        db_index=True,
    )
    preference_name = models.CharField(max_length=100)
    is_selected = models.BooleanField(default=False)


class Ingredient(models.Model):
    name = models.CharField(max_length=255)
    image = models.CharField(
        max_length=255, default="https://placeholder.pics/svg/300/DEDEDE/555555/image"
    )
    quantity = models.DecimalField(max_digits=10, decimal_places=2)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, db_index=True
    )
    preference = models.ForeignKey(
        DietaryPreference, on_delete=models.SET_NULL, null=True
    )

    def __str__(self):
        return f"{self.name} ({self.quantity})"


class ShoppingList(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, db_index=True
    )
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    quantity = models.DecimalField(max_digits=10, decimal_places=2)
    is_purchased = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.ingredient.name} ({self.quantity})"


class FavoriteRecipe(models.Model):
    servings = models.IntegerField()
    preference = models.ForeignKey(
        DietaryPreference, on_delete=models.CASCADE, related_name="favorite_recipes"
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=True,
        related_name="favorite_recipes",
        db_index=True,
    )
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=255)
    minutes = models.CharField(max_length=100)
    likes = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Macro(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, db_index=True
    )
    recipe = models.ForeignKey(FavoriteRecipe, on_delete=models.CASCADE)
    macro_type = models.CharField(max_length=50)
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    quantity = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.recipe.name} ({self.quantity})"


class PlannedRecipe(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="planned_recipes",
        db_index=True,
    )
    date_for = models.DateField()

    def __str__(self):
        return f"{self.recipe.name} on {self.date_for}"
