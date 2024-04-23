from django.conf import settings
from django.db import models


class DietaryPreference(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="dietary_preferences_entries",
        db_index=True,
    )
    preference_id = models.IntegerField()
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

    def __str__(self):
        return f"{self.name} ({self.quantity})"


class ShoppingList(models.Model):
    recipe_id = models.CharField(max_length=100)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, db_index=True
    )
    is_purchased = models.BooleanField(default=False)
    name = models.CharField(max_length=100)
    image = models.CharField(
        max_length=255, default="https://placeholder.pics/svg/300/DEDEDE/555555/image"
    )
    product_id = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.name} ({self.product_id})"


class FavoriteRecipe(models.Model):
    name = models.CharField(max_length=100)
    servings = models.IntegerField()
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=True,
        related_name="favorite_recipes",
        db_index=True,
    )
    image = models.CharField(max_length=255)
    minutes = models.CharField(max_length=100)
    likes = models.CharField(max_length=100)
    recipe_id = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name} ({self.recipe_id})"


class Macro(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, db_index=True
    )
    date = models.DateField()
    recipe_id = models.CharField(max_length=100)
    macro_names = models.CharField(max_length=255)
    quantities = models.CharField(max_length=255)

    def __str__(self):
        return f"Macro data for {self.date} ({self.user})"


class PlannedRecipe(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="planned_recipes",
        db_index=True,
    )
    date_for = models.DateField()
    recipe_id = models.CharField(max_length=100)
    name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name} on {self.date_for}"
