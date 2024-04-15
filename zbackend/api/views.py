# Example code of api/views.py
from django.shortcuts import render
from django.http import HttpResponse
from .models import ShoppingList, User, Ingredients
from django.core.exceptions import ObjectDoesNotExist

#Shopping List
#create
def create_shopping_list_item(user, ingredient, quantity):
    shopping_list_item = ShoppingList(
        user_id=user,
        ingredient_id=ingredient,
        quantity=quantity,
        is_purchased=False
    )
    shopping_list_item.save()
    return shopping_list_item

#read
def get_all_shopping_list_items():
    return ShoppingList.objects.all()

def get_shopping_list_item_by_id(item_id):
    try:
        return ShoppingList.objects.get(pk=item_id)
    except ShoppingList.DoesNotExist:
        return None

#update
def update_shopping_list_item(item_id, quantity=None, is_purchased=None):
    try:
        shopping_list_item = ShoppingList.objects.get(pk=item_id)
        if quantity is not None:
            shopping_list_item.quantity = quantity
        if is_purchased is not None:
            shopping_list_item.is_purchased = is_purchased
        shopping_list_item.save()
        return shopping_list_item
    except ShoppingList.DoesNotExist:
        return None

#delete 
def delete_shopping_list_item(item_id):
    try:
        shopping_list_item = ShoppingList.objects.get(pk=item_id)
        shopping_list_item.delete()
        return True
    except ShoppingList.DoesNotExist:
        return False
