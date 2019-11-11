from django.urls import path
from .views import StationListView, StationDetailView, LineListView, LineDetailView, ZoneListView, ZoneDetailView

urlpatterns = [
    path('stations', StationListView.as_view()),
    path('stations/<int:pk>/', StationDetailView.as_view()),
    path('lines', LineListView.as_view()),
    path('lines/<int:pk>/', LineDetailView.as_view()),
    path('zones', ZoneListView.as_view()),
    path('zones/<int:pk>/', ZoneDetailView.as_view())
]
