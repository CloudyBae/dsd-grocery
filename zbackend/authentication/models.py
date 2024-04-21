# Example code in Django models.py for CustomUser model
from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    supabase_uid = models.CharField(max_length=255, unique=True)
