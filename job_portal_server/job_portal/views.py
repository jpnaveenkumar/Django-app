# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from job_portal.models import Jobs
from job_portal.serializers import JobSerializer
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import status
from rest_framework.parsers import JSONParser 

# Create your views here.
# def home(request):
#     return HttpResponse("This is Naveen's Homepage")

@api_view(['GET', 'POST'])
def job(request):
    if request.method == 'GET':
        jobs = Jobs.objects.all()
        job_serializer = JobSerializer(jobs, many=True)
        return JsonResponse(job_serializer.data, safe= False)
    if request.method == 'POST':
        jobToInsert = JSONParser().parse(request)
        job_serializer = JobSerializer(data = jobToInsert)
        if job_serializer.is_valid():
            job_serializer.save()
            return JsonResponse(job_serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def specificJob(request, job_id):
    try:
        job = Jobs.objects.get(id = job_id)
    except Jobs.DoesNotExist:
        return JsonResponse({'message': 'The Job with given Id does not exist'}, status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        job_serializer = JobSerializer(job)
        return JsonResponse(job_serializer.data, safe= False)
    if request.method == 'PUT':
        jobToUpdate = JSONParser().parse(request)
        job_serializer = JobSerializer(job, data = jobToUpdate)
        if job_serializer.is_valid():
            job_serializer.save()
            return JsonResponse(job_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return JsonResponse(tutorial_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'DELETE':
        job.delete()
        return JsonResponse({'message': 'Job was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)