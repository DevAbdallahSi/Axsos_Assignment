from django.db import models


class Show(models.Model):
    title = models.CharField(max_length=255)
    network = models.CharField(max_length=255)
    release_date = models.DateField()
    description = models.TextField(default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)



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
    
