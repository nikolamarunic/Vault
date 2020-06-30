from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets          
from .serializers import VaultSerializer      
from .models import Item

class VaultView(viewsets.ModelViewSet):       
    serializer_class = VaultSerializer          
    queryset = Item.objects.all()              
