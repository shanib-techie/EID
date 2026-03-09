from django.contrib import admin
from django.urls import path, include

urlpatterns = [
path('admin/', admin.site.urls),
path('api/', include('eidi_api.urls')),
]
from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

def home(request):
    return HttpResponse("Eidi Backend Running")

urlpatterns = [
    path('', home),
    path('admin/', admin.site.urls),
    path('api/', include('eidi_api.urls')),
]