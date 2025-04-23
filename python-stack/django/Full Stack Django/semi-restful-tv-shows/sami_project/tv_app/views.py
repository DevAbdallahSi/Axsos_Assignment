from django.shortcuts import render,redirect,HttpResponse
from . import models
#           all shows page 
def index(request):
    return redirect('/shows')
def all_shows_page(request):
    context={
        'shows':models.get_all_shows()
    }
    return render(request, 'all_shows.html',context)

#            add a new show page 
def add_new_show_page(request):
    return render(request,'Add_a_New_Show.html')


# display the created show details
def display_created_show(request,newid):
    context={
        'show':models.get_show_by_id(newid)
    }
    return render(request,'show.html',context)

def shows_create(request):
    if request.method == 'POST':
        newid=models.shows_create(request.POST)
    return redirect('/display_created_show/'+newid) #    return redirect(f'/display_created_show/{newid}')


def update_the_selected_show_page(request,newid):
    context={
                'show':models.get_show_by_id(newid)
    }
    return render(request,'edit.html',context)

def update_the_show(request,newid):
    if request.method == 'POST':
        models.update_the_show(request.POST,newid)
    return redirect(f'/display_created_show/{newid}')
def delete_the_show(request,showid):
    models.delete_the_show(showid)
    return redirect('/shows')