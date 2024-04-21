import jwt
from django.conf import settings
from django.contrib.auth import get_user_model
from django.http import JsonResponse

User = get_user_model()


class JWTAuthenticationMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Extract JWT from request
        authorization_header = request.META.get("HTTP_AUTHORIZATION", "")
        if authorization_header.startswith("Bearer "):
            token = authorization_header.split(" ")[1]

            try:
                # Verify JWT using Supabase public key
                payload = jwt.decode(
                    token, settings.SUPABASE_PUBLIC_KEY, algorithms=["RS256"]
                )

                # Extract user ID from payload
                user_id = payload["sub"]

                # Create or retrieve user based on user ID
                user, _ = User.objects.get_or_create(username=user_id)

                # Attach user object to request for later use
                request.user = user

            except jwt.ExpiredSignatureError:
                return JsonResponse({"error": "Token has expired"}, status=401)
            except jwt.InvalidTokenError:
                return JsonResponse({"error": "Invalid token"}, status=401)

        response = self.get_response(request)
        return response
