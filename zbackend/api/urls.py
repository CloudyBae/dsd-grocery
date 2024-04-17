from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views
from .views import ShoppingListViewSet, MacrosViewSet

router = DefaultRouter()
router.register(
    r"users/(?P<user_pk>\d+)/shoppingList",
    ShoppingListViewSet,
    basename="user-shoppinglist",
)
router.register(r'users/(?P<user_pk>\d+)/macros', MacrosViewSet, basename='user-macros')

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
]
