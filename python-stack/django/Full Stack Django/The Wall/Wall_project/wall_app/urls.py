from django.urls import path
from . import views

urlpatterns = [
    path('',views.index),
    path('register',views.register_form),
    path('login_page',views.login_page),
    path('login',views.login_form),
    path('destroy_session',views.logout),
    path('wall_page',views.wall_page)
]