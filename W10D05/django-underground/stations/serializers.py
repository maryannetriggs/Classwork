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

    def create(self, data): # data is the incoming json converted to a python dict
        zone_data = data.pop('zone') # stored and removing from the data object
        lines_data = data.pop('lines')

        station = Station(**data) # create the station from the data leftover
        station.zone = Zone.objects.get(**zone_data) # add the zones back in after finding the correct one from the db
        lines = [Line.objects.get(**line_data) for line_data in lines_data] # finding all the lines that need to be added
        station.save() # we need to save to ensure primary key is beign created before attempting to set a many-many relationship on the model
        station.lines.set(lines) # now we can set those lines
        return station # returning the newly created station to be sent in the response to the client

    class Meta:
        model = Station
        fields = ('id', 'name', 'lat', 'lon', 'is_night_tube', 'zone', 'lines')
