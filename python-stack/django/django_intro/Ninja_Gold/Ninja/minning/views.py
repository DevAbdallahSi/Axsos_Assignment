from django.shortcuts import render, redirect
import random
from datetime import datetime

def index(request):
    if 'hold' not in request.session:
        request.session['hold'] = 0
    if 'messages' not in request.session:
        request.session['messages'] = []

    context = {
        'hold': request.session['hold'],
        'messages': request.session['messages']
    }
    return render(request, 'index.html', context)


def miner(request):
    if request.method == 'POST':
        location = request.POST['hide']  # hidden 
        number = random.randint(10, 20)
        request.session['hold'] += number
        message = f"You entered the {location} and earned {number} gold. ({datetime.now().strftime('%Y-%m-%d %H:%M:%S')})"
        request.session['messages'].append(message)
        request.session.modified = True
    return redirect('/')


def proses(request):
    if request.method == 'POST':
        number = random.randint(-50, 50)
        request.session['hold'] += number
        if number >= 0:
            msg = f"You went on a quest and earned {number} gold! ({datetime.now().strftime('%Y-%m-%d %H:%M:%S')})"
        else:
            msg = f"You went on a quest and lost {-number} gold... ({datetime.now().strftime('%Y-%m-%d %H:%M:%S')})"
        request.session['messages'].append(msg)
        request.session.modified = True
    return redirect('/')


def destroy(request):
    request.session.clear()
    return redirect('/')
