from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ShoppingList
from .serializers import ShoppingListSerializer
from .models import Ingredients

class ShoppingListViews(APIView):
    def get(self, request):
        try:
            shoppingList = ShoppingList.objects.all()
            serializer = ShoppingListSerializer(shoppingList, many=True)
            return Response(serializer.data)
        except Exception as ex: 
            return Response({'Error': str(ex)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    def post(self, request):
        try:
            serializer = ShoppingListSerializer(data = request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as ex:
            return Response({'Error': str(ex)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

