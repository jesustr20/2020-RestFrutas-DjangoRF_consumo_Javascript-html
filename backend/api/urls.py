from django.urls import path, include
from rest_framework import routers
from .viewsets import frutasViewSets, UserViewSet

router = routers.DefaultRouter()

router.register(r'usuario', UserViewSet)
router.register(r'frutas', frutasViewSets)

urlpatterns = [
    path('', include(router.urls))
]