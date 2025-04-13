from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.index),
    path('low',views.low_ges),
    path('high',views.high_ges),
    path('corect',views.corect_ges),
    path('play_again',views.play_again)

]
