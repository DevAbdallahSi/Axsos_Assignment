from django.urls import path
from . import views

urlpatterns = [
    path('',views.index),
    path('register',views.register_form),
    path('login_page',views.login_page),
    path('login',views.login_form),
    path('destroy_session',views.logout),
    path('create_project',views.create_project_page),
    path('add_project',views.add_project_form),
    path('back_to_dashboared',views.back_to_dashboared),
    path('project/<int:projectid>/details',views.project_details),
    path('editproject/<int:projectsid>',views.edit_project),
    path('update_project/<int:projectsid>',views.update_project),
    path('remove_this_project/<int:projectsid>',views.remove_this_project)
]