from django.urls import path
from . import views

urlpatterns = [
    path('auth/signup/', views.SignUp.as_view(), name='signup'),
    path('auth/profile/', views.UserProfileView.as_view(), name='profile'),
]
