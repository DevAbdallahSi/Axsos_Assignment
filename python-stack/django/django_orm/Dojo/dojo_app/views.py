from django.shortcuts import render ,redirect
from . import models
def index(request):

    context={
        'dojos': models.get_dojos(),
        'ninjas':models.get_ninjas()
        }
    return render(request, 'index.html',context)

def add_dojo(request):
    if request.method == 'POST':
        models.add_dojo(request.POST)
        return redirect('/')
    else:
        return redirect('/')


def add_ninjas(request):
    if request.method == 'POST':
        models.add_ninja(request.POST)
        return redirect('/')
    else:
        return redirect('/')


def  delete_dojo_form(request):
    if request.method == 'POST':
        models.delete_dojo(request.POST)
        return redirect('/')
    else:
        return redirect('/')
