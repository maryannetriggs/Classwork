from rest_framework import serializers
from .models import Station, Zone, Line

class NestedStationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Station
        fields = ('id', 'name', 'lat', 'lon', 'is_night_tube')

class NestedLineSerializer(serializers.ModelSerializer):

    class Meta:
        model = Line
        fields = ('id', 'line')

class NestedZoneSerializer(serializers.ModelSerializer):

    class Meta:
        model = Zone
        fields = ('id', 'zone')


# the line has its model information with stations
class LineSerializer(serializers.ModelSerializer):

    stations = NestedStationSerializer(many=True) # shows all station info except zone and line

    class Meta:
        model = Line
        fields = ('id', 'line', 'stations')

# the zone has its model information with stations
class ZoneSerializer(serializers.ModelSerializer):

    stations = NestedStationSerializer(many=True) # shows all station info except zone and line

    class Meta:

        model = Zone
        fields = ('id', 'zone', 'stations')

# the station has its model information with zone and lines
class StationSerializer(serializers.ModelSerializer):

    zone = NestedZoneSerializer() # shows zone id and zone number
    lines = NestedLineSerializer(many=True) # shows line id and line name

    class Meta:
        model = Station
        fields = ('id', 'name', 'lat', 'lon', 'is_night_tube', 'zone', 'lines')
