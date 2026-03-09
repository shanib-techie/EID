from django.urls import path
from .views import create_eidi

urlpatterns = [

path('eidi/', create_eidi),

]