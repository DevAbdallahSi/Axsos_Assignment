from django.urls import path 
from . import views
urlpatterns = [
    path('',views.index),
    path('add_course',views.add_course),
    path('courses/destroy/<int:courseid>',views.destroy_page),
    path('destroy/<int:courseid>',views.destroy)
]