# Create a test file per file within utils folder
# Example of a test for a utility.py function
"""
import pytest
from app.utils import calculate_total_price

@pytest.mark.django_db
def test_calculate_total_price():
    ingredient_prices = [1, 2, 3]
    total_price = calculate_total_price(ingredient_prices)

    assert total_price == 6
"""
