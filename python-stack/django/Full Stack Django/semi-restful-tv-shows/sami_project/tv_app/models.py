from django.db import models
from datetime import date,datetime

class ShowManager(models.Manager):
    def basic_validator(self, post):
        errors = {}
        if not all([post['title'], post['network'], post['release_date'], post['description']]):
            errors["required"] = "All fields are required"
        if len(post['title']) < 2:
            errors ['title_not_correct']='title name should be at least 2 characters'
        if len(post['network']) < 3:
            errors ['network_not_correct']='network name should be at least 3 characters'
        if len(post['description']) < 3:
            errors ['description_not_correct']='description name should be at least 10 characters'   
        # if post['release_date'] > date.today():
        #     errors["release_date"] = "Release date must be in the past"
        if post['release_date'] == '':
            release_date = date.today()
            errors["release_date"] = "Release date must not be empty"
        else:
            release_date = datetime.strptime(post['release_date'], '%Y-%m-%d').date()
        if release_date > date.today():
            errors["release_date"] = "Release date must be in the past"

        if Show.objects.filter(title=post['title']).exists():
                errors["title"] = "This title already exists. Please choose another."
        return errors

class Show(models.Model):
    title = models.CharField(max_length=255)
    network = models.CharField(max_length=255)
    release_date = models.DateField()
    description = models.TextField(default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ShowManager()
    



def shows_create(post):
    title = post['title']
    network =post['network']
    release_date =post['release_date']
    description =post['description']
    new = Show.objects.create(title=title,network=network,release_date=release_date,description=description)
    return new.id
    # return Show.id when creat it return 
def get_all_shows():
    return Show.objects.all()

def get_show_by_id(newid):
    return Show.objects.get(id=newid)

def update_the_show(post,newid):
    c=Show.objects.get(id=newid)
    c.network = post['network']
    c.release_date = post['release_date']
    c.description=post['description']
    c.save()
def delete_the_show(showid):
    show = Show.objects.get(id=showid)
    show.delete()


