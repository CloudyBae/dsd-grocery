from django.http import JsonResponse
from .models import User, Ingredient
''''
def add_ingredient(request, userId):
    if request.method == 'POST':
        user = User.objects.get(id=userId)
        ingredient_name = request.POST.get('name')
        ingredient = Ingredient.objects.create(user=user, name=ingredient_name)
        return JsonResponse({'message': f'Ingredient {ingredient_name} added for user {userId}'}, status=201)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)
'''
