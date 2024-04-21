from django.urls import path
from . import views

urlpatterns = [
    path("auth/signup/", views.SignUp.as_view(), name="signup"),
]
