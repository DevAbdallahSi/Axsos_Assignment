from django.urls import path
from .import views
urlpatterns = [
    path('', views.index ),
    path('add_dojo', views.add_dojo),
    path('add_ninja_form',views.add_ninjas),
    path('clear_dojo_botton',views.delete_dojo_form)
    ]
