from django.conf.urls import url

from . import views

urlpatterns = [
    # url(r'^$', views.home, name='home'),
    url(r'^jobs/$', views.job, name='job'),
    url(r'^jobs/(?P<job_id>\w{1,50})$', views.specificJob, name='specificJob'),
    url(r'^company/$', views.company, name='company'),
    url(r'^company/(?P<company_name>[\w ()-]{1,50})$', views.specificCompany, name='specificCompany')
]