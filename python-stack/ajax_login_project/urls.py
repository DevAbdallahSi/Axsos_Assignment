
from django.urls import path
from . import views

urlpatterns = [
    path('login-page/', views.login_page, name='login_page'),
    path('ajax-login/', views.ajax_login, name='ajax_login'),
    path('ajax-register/', views.ajax_register, name='ajax_register'),
    path('dashboard/', views.dashboard, name='dashboard'),
]
