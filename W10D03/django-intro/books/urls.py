from django.urls import path
from .views import ListView, DetailView

urlpatterns = [
    path('books', ListView.as_view()),
    path('books/<int:pk>/', DetailView.as_view())
]
