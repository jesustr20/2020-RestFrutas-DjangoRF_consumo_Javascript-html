from django.contrib import admin
from .models import Frutas
# Register your models here.

class FrutasAdmin(admin.ModelAdmin):
    list_display = ['id','nombre','tipo','cantidad']


admin.site.register(Frutas, FrutasAdmin)
