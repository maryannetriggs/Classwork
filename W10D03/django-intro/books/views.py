# pylint: disable=no-member
from django.shortcuts import render
from django.views import View
from .models import Book

# Create your views here.

class ListView(View):

    def get(self, request):
        books = Book.objects.all() # get all the books
        return render(request, 'index.html', {'books': books})

class DetailsView(View):

    def get(self, request, pk):
        book = Book.objects.get(pk=pk)
        return render(request, 'show.html', {'book': book})
