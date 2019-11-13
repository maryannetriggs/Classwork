from django.db import models

# Create your models here.

class Line(models.Model):
    line = models.CharField(max_length=30)

    def __str__(self):
        return f'{self.line}'

class Zone(models.Model):
    zone = models.IntegerField()

    def __str__(self):
        return f'{self.zone}'

class Station(models.Model):
    name = models.CharField(max_length=50, unique=True)
    lat = models.FloatField()
    lon = models.FloatField()
    is_night_tube = models.BooleanField(default=False)
    zone = models.ForeignKey(
        Zone,
        related_name='stations',
        on_delete=models.DO_NOTHING,
        null=True
    )
    lines = models.ManyToManyField(
        Line,
        related_name='stations',
        blank=True
    )

    def __str__(self):
        return f'{self.name}'
