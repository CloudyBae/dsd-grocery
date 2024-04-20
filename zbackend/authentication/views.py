# from rest_framework import viewsets, permissions
# from django.contrib.auth import get_user_model
# from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView
from rest_framework.views import APIView

# User = get_user_model()


# class IsOwnerOrReadOnly(permissions.BasePermission):
#     def has_object_permission(self, request, view, obj):
#         if request.method in permissions.SAFE_METHODS:
#             return True
#         return obj.id == request.user.id


# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]

#     def get_queryset(self):
#         return User.objects.filter(id=self.request.user.id)

#     def get_object(self):
#         obj = super().get_object()
#         self.check_object_permissions(self.request, obj)
#         return obj


class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    callback_url = "http://localhost:8000/auth/google/"
    client_class = OAuth2Client


class Callback(APIView):
    permission_classes = [IsAuthenticated]
