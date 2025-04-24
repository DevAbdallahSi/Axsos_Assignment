from django.db import models

class CourseManager(models.Manager):
    def basic_validator(self, post):
        errors = {}
        if not all([post['name'], post['description']]):
            errors["required"] = "All fields are required"
        if len(post['name']) < 5:
            errors ['name_not_correct']='name should be at least 2 characters'
        if len(post['description']) < 15:
            errors ['description_not_correct']='description should be at least 15 characters'   
        return errors

class Course(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(default="")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = CourseManager()



def add_new_course(post):
    name=post['name']
    description=post['description']
    new_course=Course.objects.create(name=name,description=description)
    return new_course.id

def display_all_courses():
    return Course.objects.all()
def destroy(courseid):
    course=Course.objects.filter(id=courseid)
    course.delete()

def course_by_id(courseid):
    return Course.objects.get(id=courseid)
