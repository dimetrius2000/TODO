from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
#class Author(models.Model):
    #first_name = models.CharField(max_length=64)
    #last_name = models.CharField(max_length=64)
    #birthday_name = models.PositiveBigIntegerField()

class User(AbstractUser):
    email = models.EmailField(unique=True)
