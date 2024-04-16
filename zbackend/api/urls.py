# Example code of api/urls.py
# Remove this example and write your own code
"""
from django.urls import path
from . import views

urlpatterns = [
    path('ingredients/', views.IngredientListCreateAPIView.as_view()),
]
"""
from django.urls import path
from .views import ShoppingList

urlpatterns = [
    path('users/{id}/shoppingList', ShoppingList.as_view()),
    
]