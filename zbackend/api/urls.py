from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views
from .views import (
    ShoppingListViewSet,
    MacrosViewSet,
    IngredientViewSet,
    DietaryPreferenceViewSet,
    PlannedRecipeViewSet,
)

router = DefaultRouter()
router.register(
    r"users/(?P<user_pk>\d+)/shoppingList",
    ShoppingListViewSet,
    basename="user-shoppinglist",
)
router.register(r"users/(?P<user_pk>\d+)/macros", MacrosViewSet, basename="user-macros")
router.register(
    r"users/(?P<user_pk>\d+)/ingredients",
    IngredientViewSet,
    basename="user-ingredients",
)
router.register(
    r"users/(?P<user_pk>\d+)/dietaryPreferences",
    DietaryPreferenceViewSet,
    basename="user-dietaryPreferences",
)

router.register(
    r"users/(?P<user_pk>\d+)/plannedRecipes",
    PlannedRecipeViewSet,
    basename="user-plannedRecipes",
)


urlpatterns = [
    path("", include(router.urls)),
    path(
        "favorite_recipes/<int:user_id>",
        views.get_favorite_recipes,
        name="get_favorite_recipes",
    ),
    path(
        "favorite_recipes/<int:user_id>/save/",
        views.save_favorite_recipe,
        name="save_favorite_recipe",
    ),
    path(
        "favorite_recipes/<int:user_id>/<int:favorite_recipe_id>/update/",
        views.update_favorite_recipe,
        name="update_favorite_recipe",
    ),
    path(
        "favorite_recipes/<int:user_id>/<int:favorite_recipe_id>/delete/",
        views.delete_favorite_recipe,
        name="delete_favorite_recipe",
    ),
    path(
        "recipes/<str:dietary_preference>",
        views.get_filtered_recipes,
        name="get_filtered_recipes",
    ),
    path("recipes/<int:recipe_id>/",
         views.get_recipe_info,
         name="get_recipe_info"
    ),
    path("recipes/summary/<int:recipe_id>/",
        views.get_recipe_sumary_info,
        name="get_recipe_summary",
    ),
    path(
        "recipes/ingredient/search/<str:query>/",
        views.get_ingredient_search,
        name="get_ingredient_search",
    ),
    path(
        "recipes/ingredient/<int:ingredient_id>",
        views.get_ingredient_informations,
        name="get_ingredient_information",
    ),
    path(
        "recipes/nutrition/<int:recipe_id>/",
        views.get_nutrition_informations,
        name="get_nutrition_information",
    ),
    path("api/recipes/complex_search/",
         views.get_recipes_complex_search,
         name="get_recipes_complex_search"),
]
