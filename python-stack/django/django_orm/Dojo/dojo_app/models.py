from django.db import models

class Dojo(models.Model):
    #id
    name=models.CharField(max_length=255)
    city=models.CharField(max_length=255)
    state=models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Ninja(models.Model):
    first_name=models.CharField(max_length=255)
    last_name=models.CharField(max_length=255)
    dojo_id = models.ForeignKey(Dojo, related_name='ninjas', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

def add_dojo(post):
    name=post['Dojo_Name']
    city=post['City_Name']
    state=post['State_Name']
    Dojo.objects.create(name=name,city=city,state=state)
    # return Dojo.objects.all()

def get_dojos():
    return Dojo.objects.all() 

def add_ninja(post):
    first_name = post['First_Name']
    last_name = post['Last_Name']
    dojo_id_from_the_form = post['Dojo_select']# return value of the selcted option # it return 1 
    
    Ninja.objects.create(first_name=first_name,last_name=last_name,dojo_id=Dojo.objects.get(id=dojo_id_from_the_form))

def get_ninjas():
    return Ninja.objects.all()

def delete_dojo(post):
    name=post['clear_dojo']
    Dojo.objects.get(id=name).delete()


