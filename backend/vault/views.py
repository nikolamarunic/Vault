from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, permissions          
from .serializers import VaultSerializer      
from .models import Item

class VaultView(viewsets.ModelViewSet):       
    serializer_class = VaultSerializer          
    # queryset = Item.objects.all()      #Used before when we wanted to display ALL the items
    permission_classes = [permissions.IsAuthenticated]  # For authenticating a user        

    def get_queryset(self): 
        return self.request.user.items.all()

    def perform_create(self, serializer):  
        serializer.save(owner=self.request.user)