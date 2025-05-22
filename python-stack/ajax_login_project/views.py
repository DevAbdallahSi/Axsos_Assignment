
from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required

def login_page(request):
    return render(request, 'login.html')

@csrf_exempt
def ajax_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful!'})
        else:
            return JsonResponse({'message': 'Invalid credentials.'}, status=401)
    return JsonResponse({'message': 'Only POST allowed'}, status=405)

@csrf_exempt
def ajax_register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        if User.objects.filter(username=username).exists():
            return JsonResponse({'message': 'Username already exists.'}, status=400)
        User.objects.create_user(username=username, email=email, password=password)
        return JsonResponse({'message': 'Registration successful!'})
    return JsonResponse({'message': 'Only POST allowed'}, status=405)

@login_required
def dashboard(request):
    return render(request, 'dashboard.html', {'user': request.user})
