from django.shortcuts import render

def index(request):
    # Initialize the counter if it doesn't exist
    if 'counter' not in request.session:
        request.session['counter'] = 0
    
    # Increment the counter
    request.session['counter'] += 1
    
    return render(request, 'index.html', {'counter': request.session['counter']})
