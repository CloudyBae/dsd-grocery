from authentication.models import CustomUser

class SuperuserMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        request.user = CustomUser.objects.filter(is_superuser=True).first()
        return self.get_response(request)
