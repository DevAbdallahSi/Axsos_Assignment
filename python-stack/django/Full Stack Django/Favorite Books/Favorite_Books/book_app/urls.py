from django.urls import path 
from .import views

urlpatterns = [
    path('',views.index),
    path('register_form',views.register_form),
    path('login_form',views.login_form),
    path('successed_login',views.successed_login),
    path('add_book',views.add_book),
    path('destroy_session',views.destroy_session),
    path('show_book_details/<int:bookid>',views.show_book_details),
    path('update_desc/<int:bookid>',views.update_desc),
    path('remove_this_book/<int:bookid>',views.remove_this_book),
    path('add_to_favorite/<int:bookid>',views.add_to_favorite),
    path('delete_user/<int:bookid>',views.delete_user_favorit)
]