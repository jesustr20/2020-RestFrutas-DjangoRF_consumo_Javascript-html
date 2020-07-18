from django.db import models

# Create your models here.
class Frutas(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=20)
    tipo = models.CharField(max_length=20)
    cantidad = models.IntegerField()