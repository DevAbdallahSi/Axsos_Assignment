from django.shortcuts import render ,redirect
from . import models

def index(request):
    
    cntex={
        'user':models.add_user()
    }
    return render(request, 'index.html', cntex)

def show_user_info(request):
    if request.method == 'POST':
        models.creat_user(request.POST)
        
    return redirect('/')

