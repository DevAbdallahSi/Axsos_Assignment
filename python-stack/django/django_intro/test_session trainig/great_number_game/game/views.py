from django.shortcuts import render, redirect
import random
from .models import Winner

def index(request):
    # Start a new game if it's a new session or reset
    if 'number' not in request.session:
        request.session['number'] = random.randint(1, 100)
        request.session['attempts'] = 0
        request.session['game_over'] = False

    return render(request, 'index.html')

def guess(request):
    if request.method == 'POST':
        guess = int(request.POST.get('guess'))
        number = request.session['number']
        attempts = request.session.get('attempts', 0) + 1
        request.session['attempts'] = attempts

        if attempts >= 5 and guess != number:
            request.session['game_over'] = True
            return render(request, 'lose.html', {'number': number})

        if guess < number:
            message = "Too low!"
            color = "blue"
        elif guess > number:
            message = "Too high!"
            color = "red"
        else:
            request.session['game_over'] = True
            return render(request, 'win.html', {
                'number': number,
                'attempts': attempts
            })

        return render(request, 'index.html', {
            'feedback': message,
            'color': color,
            'guess': guess,
            'attempts': attempts
        })

    return redirect('index')

def leaderboard(request):
    winners = Winner.objects.order_by('attempts')[:10]
    return render(request, 'leaderboard.html', {'winners': winners})

def submit_winner(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        attempts = request.session.get('attempts', 0)
        Winner.objects.create(name=name, attempts=attempts)

        request.session.flush()
        return redirect('leaderboard')
