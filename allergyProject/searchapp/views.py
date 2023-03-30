from django.shortcuts import render

# Create your views here.
def search(request):
    return render(request, 'search.html')

def detail(request):
    return render(request, 'detail.html')