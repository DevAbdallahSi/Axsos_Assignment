from django.db import models

class Book(models.Model):
    title=models.CharField(max_length=255)
    desc =models.TextField(default="")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


def add_new_book(post):
    book_title=post['title']
    book_details=post['description']
    Book.objects.create(title = book_title, desc=book_details)

def get_all_books():
    return Book.objects.all()
# >>>>>>>>>>>>>>>>>>  books_page setup <<<<<<<<<<<<<<<<
def get_book_by(id):
    return Book.objects.get(id=id)

def add_auther_to_book(post,id):
    bashir=Book.objects.get(id=id)
    abood=Author.objects.get(id=post["Authors_of_book"])
    bashir.authors.add(abood)

def get_books_by_its_author(id):
    author_of_a_book = Author.objects.get(id=id)
    return author_of_a_book.books.all()
#   get all the book fo this author


def add_books_to_author(post,id):
    book = Book.objects.get(id=post['author_books'])  # get the book from form
    author = Author.objects.get(id=id)                # get the author from URL
    author.books.add(book)
    # add takes a whole object: 


# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

class Author(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    notes = models.TextField(null=True, blank=True)
    books = models.ManyToManyField(Book, related_name='authors')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

def add_new_author(post):
    author_first_name = post['first_name']
    author_last_name = post['last_name']
    author_notes = post['notes']
    Author.objects.create(first_name = author_first_name, last_name = author_last_name, notes = author_notes )

def get_all_authors():
    return Author.objects.all()

# >>>>>>>>>>>>>>>>>>>>>>>>>> author_and_thir_books <<<<<<<<<<
def get_author_by_id(id):
    return Author.objects.get(id=id)

def get_autors_by_its_book(id):
    book=Book.objects.get(id=id)
    authors_of_abook=book.authors.all()
    return authors_of_abook

