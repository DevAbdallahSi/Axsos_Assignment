from django.shortcuts import render,redirect
import random

def index(request):
    if 'hold' not in request.session:
        request.session['hold']=0
        request.session['massage']=[]

    return render (request, 'index.html')

def miner(request):
        if request.method == 'POST':
            number=random.randint(10, 20)
            request.session['hold']+=number
        
            # request.session['number'].append()
            contex={
                'hoold':request.session['hold']
            }
            return redirect('/')
def proses(request):
    if request.method == 'POST':
        number = random.randint(-50,50)
        request.session['hold']+=number
        return redirect('/')
    
def destroy(request):
    request.session.clear()
    return redirect('/')



