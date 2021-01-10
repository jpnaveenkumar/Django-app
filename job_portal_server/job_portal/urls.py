from django.conf.urls import url

from . import views

urlpatterns = [
    # url(r'^$', views.home, name='home'),
    url(r'^$', views.job, name='job'),
    url(r'^(?P<job_id>\w{1,50})$', views.specificJob, name='specificJob')
]