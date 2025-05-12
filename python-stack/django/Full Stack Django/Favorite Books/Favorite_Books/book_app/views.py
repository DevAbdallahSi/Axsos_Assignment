from django.shortcuts import render,redirect,HttpResponse
from . import models
from django.contrib import messages

def index(request):
    return render(request,'index.html')

def register_form(request):
    if request.method == 'POST':
        errors = models.User.objects.basic_validator(request.POST)
        if errors:
            for key,value in errors.items():
                messages.error(request, value)
            return redirect('/')
        else:
            new_user=models.create_user(request.POST)
            request.session['id']=new_user
            return redirect('/')
    else:
        return redirect('/')
    

def login_form(request):
    if request.method == 'POST':
        errors = models.UserManager.basic_validator_login(request.POST)
        if errors:
            for key,value in errors.items():
                messages.error(request, value)
            return redirect('/')
        else:
            user=models.chick_info(request.POST)
            if user: # check if there is smth return and save in the variable called user 
                request.session['id']=user.id
                return redirect('/successed_login')
            else:
                messages.error(request,'wrong email or password')
                return redirect('/')
    else:
        return redirect('/')


def successed_login(request):
    if 'id' in request.session:
        context={
            'user':models.User.objects.get(id=request.session['id']),
            'all_book':models.display_all_book(),
            'favorites':models.favorites_by_user(request.session['id'])
        }
        return render (request,'books.html',context)
    else:
        return redirect('/')
    
def add_book(request):
    if request.method == 'POST':
        errors = models.BookManager.basic_validator(request.POST)
        if errors:
            for key,value in errors.items():
                messages.error(request, value)
            return redirect('/successed_login')
        else:
            user_id = request.session['id']  # <-- get the id from session
            new_book = models.creat_new_book(request.POST, user_id)
            if 'id' in request.session:
                return redirect('/successed_login')
            return redirect('/')
        
def destroy_session(request):
    if 'id' in request.session:
            request.session.flush()
    return redirect('/')

def show_book_details(request,bookid):
    context={
        'user':models.User.objects.get(id=request.session['id']),
        'book':models.get_book_id(bookid),
        'users_liked_boook':models.users_liked_boook(bookid)
    }
    if models.get_book_id(bookid) in models.favorites_by_user(request.session['id']):
        return render(request,'books_favorit.html',context)
    else:
        return render(request,'see_book.html',context)

def update_desc(request,bookid):
    if request.method == 'POST':
        models.update_desc(request.POST,bookid)
        return redirect('/successed_login')
    
def remove_this_book(request,bookid):
    if request.method == 'POST':
        models.remove_this_book(bookid)
        return redirect('/successed_login')
    else:
        return redirect('/')

def add_to_favorite(request,bookid):

    models.add_to_favorite(bookid,request.session['id'])
    return redirect('/successed_login')

def delete_user_favorit(bookid):
    userid=request.session['id']
    models.delete_user_favorit(bookid,request.session['id'])
    return redirect(f'/show_book_details/{userid}')

