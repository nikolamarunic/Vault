from django.contrib import admin
from .models import Vault # add this

class VaultAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')

# Register your models here.
admin.site.register(Vault, VaultAdmin)