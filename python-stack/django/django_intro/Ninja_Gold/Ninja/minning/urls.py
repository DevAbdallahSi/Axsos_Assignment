from django.urls import path,include
from . import views

urlpatterns = [
    path('' ,  views.index),
    path('process_money', views.miner),
    path('guess', views.proses),
    path('clearme', views.destroy)
]
