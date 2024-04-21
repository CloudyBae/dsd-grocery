from django.http import JsonResponse
from django.contrib.auth import get_user_model
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


class SignUp(APIView):
    def post(self, request):
        data = request.POST
        username = data.get("username")
        email = data.get("email")

        User = get_user_model()
        if User.objects.filter(username=username).exists():
            return JsonResponse({"success": False, "error": "Username already exists"})
        try:
            user = User.objects.create_user(username, email)
            return JsonResponse(
                {"success": True, "message": "User signed up successfully"}
            )
        except Exception as e:
            return JsonResponse({"success": False, "error": str(e)})


class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        content = {"message": "This is a protected resource"}
        return Response(content)
