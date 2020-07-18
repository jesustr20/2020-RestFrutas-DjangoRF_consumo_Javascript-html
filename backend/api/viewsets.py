from rest_framework import viewsets
from .models import Frutas
from django.contrib.auth.models import User
from .serializers import FrutasSerializer, UserSerializer

#Usuario
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer



class frutasViewSets(viewsets.ModelViewSet):
    queryset = Frutas.objects.all()
    serializer_class = FrutasSerializer

