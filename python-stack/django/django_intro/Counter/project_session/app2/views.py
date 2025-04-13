from django.shortcuts import render ,redirect
from django.http import HttpResponse


def index(request):
    if 'counter_session' not in request.session:
        request.session['counter_session'] = 0
    else:
        request.session['counter_session'] += 1
    
    index ={
            'counter_index': request.session['counter_session'],
            'salhi' : 'abdallah'
    }
    return render(request, 'index.html', index)


def delete(request):
    if 'counter' in request.session:
        request.session.clear()
        return redirect('/')
    
def add(request):
    if 'counter' in request.session:
        request.session['counter'] += 1
        return redirect('/')



