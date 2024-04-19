from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import GoogleAuthSerializer
import requests
from django.conf import settings


class GoogleAuthView(APIView):
    def get(self, request):
        user_data = google_authenticate_user(request.query_params.get("code"))

        if user_data:
            serializer = GoogleAuthSerializer(data=user_data)
            if serializer.is_valid():
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(
                {"error": "Authentication failed"}, status=status.HTTP_400_BAD_REQUEST
            )


def google_authenticate_user(authorization_code):
    token_endpoint = "https://oauth2.googleapis.com/token"
    redirect_uri = "http://127.0.0.1:8000/accounts/google/login/callback/"

    data = {
        "code": authorization_code,
        "client_id": settings.CLIENT_ID,
        "client_secret": settings.CLIENT_SECRET,
        "redirect_uri": redirect_uri,
        "grant_type": "authorization_code",
    }

    response = requests.post(token_endpoint, data=data)
    if response.status_code == 200:
        token_data = response.json()
        access_token = token_data.get("access_token")
        user_info = get_user_info(access_token)
        return user_info
    else:
        return None


def get_user_info(access_token):
    userinfo_endpoint = "https://openidconnect.googleapis.com/v1/userinfo"
    headers = {"Authorization": f"Bearer {access_token}"}
    response = requests.get(userinfo_endpoint, headers=headers)
    if response.status_code == 200:
        user_info = response.json()
        return {
            "email": user_info.get("email"),
            "name": user_info.get("name"),
        }
    else:
        return None
