from django.shortcuts import redirect , render ,HttpResponse


def root(request):   
    return render( request, 'blogs.html')


def index(request):
    return HttpResponse('hello')
