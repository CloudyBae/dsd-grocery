# Example code of authentication/backends.py
# Remove this example and write your own code
"""
from django.contrib.auth.backends import BaseBackend
from django.contrib.auth import get_user_model

User = get_user_model()

class OAuthBackend(BaseBackend):
    def authenticate(self, request, email=None):
        # Implement authentication logic using OAuth token or email
        try:
            user = User.objects.get(email=email)
            return user
        except User.DoesNotExist:
            return None
"""
