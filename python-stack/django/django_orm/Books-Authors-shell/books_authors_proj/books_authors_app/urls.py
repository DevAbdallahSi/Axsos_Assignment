# from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', views.index),
    path('add_book', views.add_new_book),
    #############
    path('book_authors/<int:id>', views.books_and_thir_author),#>>>>>>>
    path('author_books/<int:id>',views.author_and_thir_books),
    #############
    path('author_page', views.show_author_page),
    path('add_author', views.add_new_author),
    path('print_the_selected_author/<int:id>',views.print_the_selected_author),
    path('add_new_book_to_author/<int:id>',views.add_new_book_to_author)
]