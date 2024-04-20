from django.urls import path, include
from . import views

urlpatterns = [
    path("dj-rest-auth/", include("dj_rest_auth.urls")),
    path("dj-rest-auth/registration/", include("dj_rest_auth.registration.urls")),
    path("dj-rest-auth/google/", views.GoogleLogin.as_view(), name="google_login"),
    path("google/", views.Callback.as_view()),
]
