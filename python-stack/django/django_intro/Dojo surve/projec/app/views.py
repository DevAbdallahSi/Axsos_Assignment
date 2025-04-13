from django.shortcuts import render


def index(request):
        return render(request, 'index.html')


def result(request):
    name=request.POST['name']
    Locations=request.POST["Locations"]
    languages=request.POST["languages"]
    dojo=request.POST["dojo"]
    res={
        'name':name,
        'Locations':Locations,
        'languages':languages,
        'dojo':dojo
    }
    return render(request,"result.html",res)