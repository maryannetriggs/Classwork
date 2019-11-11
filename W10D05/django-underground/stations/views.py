# pylint: disable=no-member
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView
from .models import Station, Line, Zone
from .serializers import StationSerializer, LineSerializer, ZoneSerializer

# Create your views here.
class StationListView(ListCreateAPIView):
    queryset = Station.objects.all()
    serializer_class = StationSerializer

class StationDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Station.objects.all()
    serializer_class = StationSerializer

class LineListView(ListAPIView):
    queryset = Line.objects.all()
    serializer_class = LineSerializer

class LineDetailView(RetrieveAPIView):
    queryset = Line.objects.all()
    serializer_class = LineSerializer

class ZoneListView(ListAPIView):
    queryset = Zone.objects.all()
    serializer_class = ZoneSerializer

class ZoneDetailView(RetrieveAPIView):
    queryset = Zone.objects.all()
    serializer_class = ZoneSerializer

# LONG VERSION

# from rest_framework.views import APIView
# from rest_framework.response import Response
# from .models import Station
# from .serializers import StationSerializer

# # Create your views here.
# class ListView(APIView):

#     def get(self, _request):
#         stations = Station.objects.all() # gets all the stations objects
#         serializer = StationSerializer(stations, many=True) # serializes them to json

#         return Response(serializer.data) # sends the response to the client

# class DetailView(APIView):

#     def get(self, _request, pk):
#         station = Station.objects.get(pk=pk)
#         serializer = StationSerializer(station)

#         return Response(serializer.data)
