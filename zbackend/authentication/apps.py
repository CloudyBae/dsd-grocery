from django.apps import AppConfig
import importlib


class AuthenticationConfig(AppConfig):
    name = "authentication"

    def ready(self):
        importlib.import_module("authentication.signals")
