from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from . import models
import bcrypt
def index(request):
    return render (request,'index.html')

def register_form(request):
    if request.method == 'POST':
        errors = models.User.objects.basic_validator(request.POST)
        if errors:
            for k, v in errors.items():
                messages.error(request, v)
            return redirect('/')
        else:
            new=models.uesr_data(request.POST)
            request.session['user_id']=new
            return redirect ('/')
    else:
        return redirect ('/')
    
def login_page(request):
    if 'user_id' in request.session:
        context={
            'projects':models.all_project(),
            'user':models.get_user_by_id(request.session['user_id']),
        }
        return render(request, 'dashboard.html',context)
    else:
        return redirect('/')

def login_form(request):
    if request.method == 'POST':
        errors = models.UserManager.basic_validator_login(request.POST)
        if errors:
            for k, v in errors.items():
                messages.error(request, v)
            return redirect('/')
        else:
            user=models.UserManager.get_the_user_info(request.POST)
            if user:
                request.session['user_id']=user.id
                return redirect('/login_page')
            else:
                messages.error(request,'rong email or password')
                return redirect('/')
def logout(request):
    if 'user_id' in request.session:
        request.session.flush() 
        return redirect('/')
    
def create_project_page(request):
    return render(request,'create_project.html')

def add_project_form(request):
    if request.method == 'POST':
        errors = models.Project.objects.basic_validator_project(request.POST)
        if errors:
            for k, v in errors.items():
                messages.error(request, v)
            return redirect('/create_project')
        else:
            user_id=request.session['user_id']
            models.create_project(request.POST,user_id)
            if 'user_id' in request.session:
                return redirect('/create_project')
            else:
                return redirect('/')
    else:
        return redirect('/')
    
def back_to_dashboared(request):
    if request.method == 'POST':
        return redirect('/login_page')
    else:
        return redirect('/login_page')
    
def project_details(request,projectid):
    if 'user_id' in request.session:
        context={
            'projects_id':models.get_project_id(projectid),
            'user':models.get_user_by_id(request.session['user_id']),
        }
        return render(request,'project_details.html',context)
    else:
        return redirect('/login_page')

def edit_project(request,projectsid):
    if 'user_id' in request.session:
        context={
            'projects_id':models.get_project_id(projectsid),
            'user':models.get_user_by_id(request.session['user_id']),
        }
        return render(request,'edit_project.html',context)
    else:
        return redirect('/login_page')

def update_project(request,projectsid):
    if request.method == 'POST':
        if 'user_id' in request.session:
            models.update_project(request.POST,projectsid)
            return redirect(f'/project/{projectsid}/details')
        else:
            return redirect('/login_page')
    return redirect('/login_page')

def remove_this_project(request,projectsid):
    if request.method == 'POST':
        if 'user_id' in request.session:
            models.remove_this_project(projectsid)
            return redirect('/login_page')
        else:
            return redirect('/')
    return redirect('/')
