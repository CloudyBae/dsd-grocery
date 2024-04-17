from django.urls import path
from . import views

urlpatterns = [
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
]
