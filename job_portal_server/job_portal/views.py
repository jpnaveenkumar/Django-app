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

def handleSuccessResponse(data, status):
    response = {
        "status" : "success",
        "data" : data
    }
    return JsonResponse(response, status = status, safe = False)

def handleFailureResponse(message, status):
    response = {
        "status" : "error",
        "data" : message
    }
    return JsonResponse(response, status = status, safe = False)

def getAllJobs():
    jobs = Jobs.objects.all()
    job_serializer = JobSerializer(jobs, many=True)
    return handleSuccessResponse(job_serializer.data, status.HTTP_200_OK)

def createJob(jobRequest):
    jobToInsert = JSONParser().parse(jobRequest)
    job_serializer = JobSerializer(data = jobToInsert)
    if job_serializer.is_valid():
        job_serializer.save()
        return handleSuccessResponse(job_serializer.data, status.HTTP_201_CREATED)
    return handleFailureResponse(job_serializer.errors, status.HTTP_400_BAD_REQUEST)

def updateJob(jobRequest):
    jobToUpdate = JSONParser().parse(jobRequest)
    job_serializer = JobSerializer(job, data = jobToUpdate)
    if job_serializer.is_valid():
        job_serializer.save()
        return handleSuccessResponse(job_serializer.data, status.HTTP_201_CREATED)
    else:
        return handleFailureResponse(tutorial_serializer.errors, status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def job(request):
    if request.method == 'GET':
        return getAllJobs()
    if request.method == 'POST':
        return createJob(request)

@api_view(['GET', 'PUT', 'DELETE'])
def specificJob(request, job_id):
    try:
        job = Jobs.objects.get(id = job_id)
    except Jobs.DoesNotExist:
        return handleFailureResponse('The Job with given Id does not exist', status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        job_serializer = JobSerializer(job)
        return handleSuccessResponse(job_serializer.data, status.HTTP_200_OK)
    if request.method == 'PUT':
        return updateJob(request)
    if request.method == 'DELETE':
        job.delete()
        return handleSuccessResponse('Job was deleted successfully!', status.HTTP_204_NO_CONTENT)