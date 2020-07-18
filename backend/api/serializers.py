from rest_framework import serializers
from .models import Frutas
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

#USUARIOS
class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id','username','email','password']
        #extra_kwargs = {'password':{'write_only':True}}
     
    def create(self, validated_data):
        
        user = User.objects.create(
            #email = validated_data["email"]
            username = validated_data["username"],
            email = validated_data["email"]
        )
        user.set_password(validated_data["password"])
        user.save()
        return user
    
    def update(self, instance, validated_data):
        if 'password' in validated_data:
            password = validated_data.pop('password')
            instance.set_password(password)
        return super(UserSerializer, self).update(instance, validated_data)

class FrutasSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Frutas
        fields = ['id','nombre','tipo','cantidad']
