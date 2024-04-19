from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet

router = DefaultRouter()
router.register(r'profile', UserViewSet, basename='user-profile')


urlpatterns = [
    path('', include(router.urls)),
]
