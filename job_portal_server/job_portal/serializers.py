from rest_framework import serializers 
from job_portal.models import Jobs

class JobSerializer(serializers.ModelSerializer):

    class Meta:
        model = Jobs
        fields = ('id', 'company', 'title', 'logo_url', 'date')