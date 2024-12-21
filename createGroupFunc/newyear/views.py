import datetime
from django.shortcuts import render

# Create your views here.

def index(request):
    now = datetime.datetime.now()
    return render(request, "newyear/index.html", {
        "newyear" : True
    })

def rando(request):
    return render(request, "newyear/rando.html")