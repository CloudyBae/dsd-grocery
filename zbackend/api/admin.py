from django.contrib import admin
from .models import (
    Ingredient,
    DietaryPreference,
    ShoppingList,
    PlannedRecipe,
    FavoriteRecipe,
    Macro,
)

admin.site.register(Ingredient)
admin.site.register(DietaryPreference)
admin.site.register(ShoppingList)
admin.site.register(PlannedRecipe)
admin.site.register(FavoriteRecipe)
admin.site.register(Macro)
