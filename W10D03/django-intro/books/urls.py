from django.urls import path
from .views import ListView, DetailsView

urlpatterns = [
    path('', ListView.as_view()),
    path('<int:pk>/', DetailsView.as_view())
]
