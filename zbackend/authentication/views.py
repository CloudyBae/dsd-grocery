from rest_framework import viewsets, permissions
from django.contrib.auth import get_user_model
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse

User = get_user_model()


class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.id == request.user.id


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]

    def get_queryset(self):
        return User.objects.filter(id=self.request.user.id)

    def get_object(self):
        obj = super().get_object()
        self.check_object_permissions(self.request, obj)
        return obj


def make_superuser(request):
    if request.method == 'POST':
        user_id = request.POST.get('user_id')  # Assuming you're sending user_id in the request body
        try:
            user = User.objects.get(pk=user_id)
            user.is_superuser = True
            user.save()
            return JsonResponse({'message': 'User is now a superuser'})
        except User.DoesNotExist:
            return JsonResponse({'error': 'User does not exist'}, status=400)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)
