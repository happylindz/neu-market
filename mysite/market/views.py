#coding:utf-8
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
 
def index(request):
	return HttpResponse(u"Index page!")

def json_response(request):
	response_data = {}
	response_data['result'] = "json data"
	response_data['message'] = "Some json message"
	return JsonResponse(response_data)

def add(request):
	a = request.GET['a']
	b = request.GET['b']
	c = int(a) + int(b)
	return HttpResponse(str(c))

def add2(request, a, b):
	c = int(a) + int(b)
	return HttpResponse(str(c))

def home(request):
	return render(request, 'home.html')
	

