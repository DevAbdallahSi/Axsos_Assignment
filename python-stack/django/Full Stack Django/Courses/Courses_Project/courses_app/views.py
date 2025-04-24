from django.shortcuts import render ,redirect
from . import models
from django.contrib import messages


def index(request):
    context={
        'courses':models.display_all_courses()
    }
    return render(request,'index.html',context)

def add_course(request):
    if request.method == 'POST':
        errors= models.Course.objects.basic_validator(request.POST)
        print(errors)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect('/')
        else:
            print ("hellp")
            new_course=models.add_new_course(request.POST)
            messages.success(request, "Course successfully updated")
            return redirect('/')

def destroy_page(request,courseid):
    context={
        'course':models.course_by_id(courseid)
    }
    return render(request,'destroy.html',context)

def destroy(request,courseid):
    models.destroy(courseid)
    return redirect('/')

