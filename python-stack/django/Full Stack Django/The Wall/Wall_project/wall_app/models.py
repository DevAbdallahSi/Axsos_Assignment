from django.db import models
class UserManager(models.Manager):
    def validator(self,postData):
        errors={}


class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects= UserManager()
class Message(models.Model):
    message=models.TextField()
    user=models.ForeignKey(User, related_name ='messages',on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Comment(models.Model):
    comment=models.TextField()
    Message=models.ForeignKey(Message ,related_name = 'comments', on_delete=models.CASCADE) 
    user=models.ForeignKey(User, related_name = 'comments', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)