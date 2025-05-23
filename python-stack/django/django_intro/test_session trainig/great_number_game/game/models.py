from django.db import models

from django.db import models

class Winner(models.Model):
    name = models.CharField(max_length=100)
    attempts = models.IntegerField()

    def __str__(self):
        return f"{self.name} - {self.attempts} tries"
