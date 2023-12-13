from django.shortcuts import render


# Create your views here.
def front_index(request):
    return render(request, 'front/front_index.html')