# Create a test file per file within api folder
# Example of a test for a models.py function
"""
import pytest
from app.models import Ingredient

@pytest.fixture
def ingredient():
    return Ingredient.objects.create(ingredientId='test_id')

def test_ingredient_id_field(ingredient):
    assert ingredient.ingredientId == 'test_id'
"""
import pytest
from api.models import ShoppingList


@pytest.fixture
def shoppingList():
    return ShoppingList.objects.create(shoppingList="test_id")


def test_shoppingList_id_field(shoppingList):
    assert shoppingList.shoppingListId == "test_id"
