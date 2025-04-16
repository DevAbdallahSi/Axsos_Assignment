from django.db import models

class Book(models.Model):
    title=models.CharField(max_length=255)
    desc =models.TextField(default="")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Author(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    notes = models.TextField(null=True, blank=True)
    books = models.ManyToManyField(Book, related_name='Authors')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
