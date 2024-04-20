from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet
from .views import make_superuser

router = DefaultRouter()
router.register(r"profile", UserViewSet, basename="user-profile")


urlpatterns = [
    path("", include(router.urls)),
    path('make_superuser/', make_superuser, name='make_superuser'),
]
