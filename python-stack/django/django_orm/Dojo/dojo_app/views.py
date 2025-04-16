from django.shortcuts import render ,redirect
from . import models
def index(request):

    if 'new_dojo' not in request.session or 'dojo_list' not in request.session:
        request.session['new_dojo']=[]
        # request.session['dojo_list']=[]

        context={
            'new_dojo':request.session['new_dojo']
        }
    return render(request, 'index.html',context)

def add_dojo(request):
    if request.method == 'POST':
        add_new_dojo=models.add_dojo(request.POST)
        if 'new_dojo' not in request.session:
            request.session['new_dojo']=add_new_dojo
            request.session['new_dojo'].append(add_new_dojo)


        return redirect('/')
    else:
        return redirect('/')