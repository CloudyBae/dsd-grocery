from django.http import JsonResponse
from django.contrib.auth import get_user_model
from rest_framework.views import APIView


class SignUp(APIView):
    def post(self, request):
        data = request.POST
        username = data.get("username")
        email = data.get("email")

        User = get_user_model()
        if User.objects.filter(username=username).exists():
            return JsonResponse({"success": False, "error": "Username already exists"})
        try:
            User.objects.create_user(username, email)
            return JsonResponse(
                {"success": True, "message": "User signed up successfully"}
            )
        except Exception as e:
            return JsonResponse({"success": False, "error": str(e)})
