from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ShoppingListViewSet

router = DefaultRouter()
router.register(
    r"users/(?P<user_pk>\d+)/shoppingList",
    ShoppingListViewSet,
    basename="user-shoppinglist",
)

urlpatterns = [
    path("", include(router.urls)),
]
