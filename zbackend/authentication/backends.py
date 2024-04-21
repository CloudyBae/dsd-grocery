from django.contrib.auth import get_user_model


class SupabaseBackend:
    def authenticate(self, request, supabase_uid=None):
        user_model = get_user_model()
        try:
            return user_model.objects.get(supabase_uid=supabase_uid)
        except user_model.DoesNotExist:
            return None

    def get_user(self, user_id):
        user_model = get_user_model()
        try:
            return user_model.objects.get(pk=user_id)
        except user_model.DoesNotExist:
            return None
