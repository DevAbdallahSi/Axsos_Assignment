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
    def get_the_user_info(post):
        email_log = post['email_log']
        password = post['password']
        user = User.objects.filter(email=email_log).first()
        if user and bcrypt.checkpw(password.encode(), user.password.encode()):
            return user
        else:
            return None
class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects=UserManager()

def uesr_data(post):
    hashed_pw = bcrypt.hashpw(post['password'].encode(), bcrypt.gensalt()).decode()
    first_name=post['first_name']
    last_name=post['last_name']
    email=post['email']
    new=User.objects.create(first_name=first_name,last_name=last_name,email=email,password=hashed_pw)
    return new.id

def get_user_by_id(user_id):
    return User.objects.get(id=user_id)

class ProjectManager(models.Manager):
    def basic_validator_project(self, post):
        errors = {}
        if not all([post['project_name'], post['description'], post['start_date'], post['end_date']]):
            errors["required"] = "All fields are required"
        if len(post['project_name']) < 3 or len(post['description']) < 10:
            errors["required_name"] = "First and Last name must each be at least 3 and 10 characters long."
            return errors
        
class Project(models.Model):
    project_name = models.CharField(max_length=255)
    desc = models.TextField()
    add_by=models.ForeignKey(User,related_name='projects',on_delete=models.CASCADE )
    start_date=models.DateField()
    end_date=models.DateField()
    favorite=models.ManyToManyField(User,related_name='favourite_project')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects=ProjectManager()

def create_project(post,user_id):
    project_name=post['project_name']
    desc=post['description']
    start=post['start_date']
    end=post['end_date']
    add_by=get_user_by_id(user_id)
    add_by.favourite_project.all().filter()
    proj=Project.objects.create(project_name=project_name,desc=desc,start_date=start,end_date=end,add_by=add_by)
    proj.favorite.add(add_by)
    return proj.id
def all_project():
    return Project.objects.all()

def get_project_id(projectid):
    return Project.objects.get(id=projectid)

def update_project(post,projectsid):
    new=Project.objects.get(id=projectsid)
    new.project_name=post['project_name']
    new.desc=post['description']
    new.start_date=post['start_date']
    new.end_date=post['end_date']
    new.save()

def remove_this_project(projectid):
    project=Project.objects.get(id=projectid)
    project.delete()