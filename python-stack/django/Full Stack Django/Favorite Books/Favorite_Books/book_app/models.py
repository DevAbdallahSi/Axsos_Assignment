from django.db import models
import re
import bcrypt

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
class UserManager(models.Manager):
    def basic_validator(self, post):
        errors = {}
        if not all([post['first_name'], post['last_name'], post['email'], post['password'],post['confirm_pw']]):
            errors["required"] = "All fields are required"
        if len(post['first_name']) < 2 or len(post['last_name']) < 2:
            errors["required_name"] = "First and Last name must each be at least 2 characters long."
        if len(post['password']) <= 8:
            errors["password"] = " password should be at least 8 characters"
        if post['password'] != post['confirm_pw']:
            errors['password_match'] = "Passwords must match"
        if not EMAIL_REGEX.match(post['email']):    # test whether a field matches the pattern            
            errors['email'] = "Invalid email address!"
        if User.objects.filter(email=post['email']).exists():
            errors['email'] = 'email is already exists'
        return errors
    def basic_validator_login(post):
        errors = {}
        if not EMAIL_REGEX.match(post['email_log']):    # test whether a field matches the pattern            
            errors['email_log'] = "Invalid email address!"
        return errors
    
class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects=UserManager()
def create_user(post):
    hashed_pw = bcrypt.hashpw(post['password'].encode(), bcrypt.gensalt()).decode()
    first_name=post['first_name']
    last_name=post['last_name']
    email=post['email']
    new=User.objects.create(first_name=first_name,last_name=last_name,email=email,password=hashed_pw)
    return new.id
def chick_info(post):
    email_log = post['email_log']
    password = post['password']
    user = User.objects.filter(email=email_log).first()
    if user and bcrypt.checkpw(password.encode(), user.password.encode()):
        return user
    else:
        return None
def get_user(id):
    return User.objects.filter(id=id).first()

def favorites_by_user(id):
    user=User.objects.get(id=id)
    return user.favourite_books.all()

class BookManager(models.Manager):
    def basic_validator(post):
        errors = {}
        if len(post['title']) == 0 :
            errors["title"] = " title is requires"
        if len(post['description']) < 5 :
            errors["description"] = " description should be at least 5 characters"
        return errors
    
class Book(models.Model):
    title = models.CharField(max_length=255)
    desc = models.TextField()
    favorite=models.ManyToManyField(User,related_name='favourite_books')
    uploaded_at=models.ForeignKey(User,related_name='uploaded_books',on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects=BookManager()

def creat_new_book(post, user_id):
    title = post['title']
    desc = post['description']
    uploaded_by = get_user(user_id)  # <- now really calling the function
    uploaded_by.favourite_books.all().filter()
    newbook = Book.objects.create(title=title, desc=desc, uploaded_at=uploaded_by)
    newbook.favorite.add(uploaded_by)
    return newbook.id

def users_liked_boook(bookid):
    book=Book.objects.get(id=bookid)


def display_all_book():
    return Book.objects.all()

def get_book_id(bookid):
    return Book.objects.get(id=bookid)


def update_desc(post,bookid):
    new_book=Book.objects.get(id=bookid)
    new_book.desc=post['description']
    new_book.save()

def remove_this_book(bookid):
    this_book=Book.objects.get(id=bookid)
    this_book.delete()

def add_to_favorite(bookid,userid):
    user=User.objects.get(id=userid)
    book=Book.objects.get(id=bookid)
    user.favourite_books.add(book) 

def delete_user_favorit(userid, bookid):
    book = Book.objects.get(id=bookid)
    user = User.objects.get(id=userid)
    book.favorite.remove(user)