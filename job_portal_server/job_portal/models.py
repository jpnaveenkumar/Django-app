# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Jobs(models.Model):
    id = models.AutoField(primary_key=True)
    company = models.CharField(max_length=100)
    title = models.CharField(max_length=500)
    logo_url = models.TextField()
    date = models.CharField(max_length=50)
    class Meta:
        db_table = 'MY_TABLE'

