from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Eidi
from .serializers import EidiSerializer


@api_view(['POST'])
def create_eidi(request):

    serializer = EidiSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)