from allauth.account.signals import user_signed_up
from django.dispatch import receiver

@receiver(user_signed_up)
def populate_profile(sociallogin, user, **kwargs):
    if sociallogin.account.provider == 'google':
        user_data = sociallogin.account.extra_data
        email = user_data.get('email')
        if email:
            user.email = email
            user.save()
