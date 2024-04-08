# Create a test file per file within authentication folder
# Example of a test for a views.py function
"""
import pytest
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

@pytest.mark.django_db
def test_logout_view():
    client = APIClient()
    url = reverse('logout')
    response = client.post(url)

    assert response.status_code in [status.HTTP_200_OK, status.HTTP_204_NO_CONTENT]
"""
