from django.urls import path 
from .import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('',views.index),
    path('shows',views.all_shows_page),
#       Add_a_New_Show_page
    path('shows/new',views.add_new_show_page),

    path('shows_create',views.shows_create),

    path('display_created_show/<int:newid>',views.display_created_show),
    path('update_the_selected_show/<int:newid>/edit',views.update_the_selected_show_page),
    path('shows/<int:newid>/update',views.update_the_show),
    path('delete/<int:showid>',views.delete_the_show),

]