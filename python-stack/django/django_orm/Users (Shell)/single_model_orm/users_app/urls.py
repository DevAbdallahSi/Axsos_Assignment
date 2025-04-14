
from django.urls import path
from . import views
urlpatterns = [
    path('', views.index ),
    path('show_user_info' , views.show_user_info )
]