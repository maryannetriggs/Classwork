class Car:

    def __init__(self, make, colour, seats):
        self.make = make
        self.colour = colour
        self.seats = seats
        self.mph = 0

    def __str__(self):
        return f'{self.colour} {self.make} travelling at {self.mph}mph!'

    def accelerate(self, amount):
        self.mph = self.mph + amount

    def decelerate(self, amount):
        self.mph = self.mph - amount

ford = Car('Ford', 'red', 5)
fiat = Car('Fiat', 'blue', 4)

print(fiat)
fiat.accelerate(100)
print(fiat)
fiat.decelerate(40)
print(fiat)
print(ford.colour)
