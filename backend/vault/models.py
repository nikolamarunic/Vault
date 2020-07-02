from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Item(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE) #Deletes item if user is deleted

    def _str_(self):
        return self.name