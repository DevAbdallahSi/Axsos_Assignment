from django.shortcuts import render,redirect,HttpResponse
from . import models
from django.contrib import messages
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
        errors = models.Show.objects.basic_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)# redirect the user back to the form to fix the 
            return redirect('/shows/new')
        else:
            newid=models.shows_create(request.POST)
            return redirect(f'/display_created_show/{newid}') #    return redirect('/display_created_show/'+newid)


def update_the_selected_show_page(request,newid):
    context={
                'show':models.get_show_by_id(newid)
    }
    return render(request,'edit.html',context)

def update_the_show(request,newid):
    if request.method == 'POST':
        errors = models.Show.objects.basic_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)# redirect the user back to the form to fix the 
            return redirect(f'/update_the_selected_show/{newid}/edit')
        else:
            models.update_the_show(request.POST,newid)
            return redirect(f'/display_created_show/{newid}')
    
def delete_the_show(request,showid):
    models.delete_the_show(showid)
    return redirect('/shows')