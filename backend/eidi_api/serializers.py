from rest_framework import serializers
from .models import Eidi


class EidiSerializer(serializers.ModelSerializer):

    class Meta:
        model = Eidi
        fields = '__all__'