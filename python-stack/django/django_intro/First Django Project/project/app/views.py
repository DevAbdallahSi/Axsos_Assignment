from django.shortcuts import redirect , render ,HttpResponse 
from django.http import JsonResponse


def root(request):   
    return redirect('/blogs')


def index(request):
    return HttpResponse('placeholder to display a new form to create a new blog')
def new (request):
    return HttpResponse("placeholder to display a new form to create a new blog")
def creat(request):
    return redirect ('/')
def show(request,number):
    return HttpResponse(f" placeholder to display a new form to create a new blog {number}")
def edit(request,number):
    return HttpResponse(f"placeholder to display a new form to create a new blog",{number})
def destroy(request,number):
        return  redirect('/blogs')
def jason(request):
    return JsonResponse('/',safe=False)