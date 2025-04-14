from django.db import models 

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email =models.CharField(max_length=255)
    age=models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

def creat_user(user):
        user= User.objects.create(first_name=user['first_name'],last_name=user['last_name'],email=user['email'],age=user['age'])
        return user
def add_user():
    return User.objects.all()

