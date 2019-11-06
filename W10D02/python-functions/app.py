# def add(a, b=4):
#     ''' this function adds two numbers together'''
#     return a + b

# print(add(1))
# print(add.__doc__)
# # Magic words...

# # Or can be written like this in a one-liner...

# add_again = lambda a, b: a + b

# SCOPE

# a = 10

# def scope_test(b):
#     # global a
#     a = 20
#     return a + b

# print(scope_test(20))
# print(a)

# POSITIONAL ARGUMENTS

# def stones_to_kg(st, lbs):
#     return ((st * 14) + lbs) * 0.453692

# print(stones_to_kg(lbs=7, st=10))

# ARBITRARY ARGUMENTS

# def greet(greeting, *names):
#     '''this function will loop through the names and say hi to them'''
#     # print(names)
#     # returns a tuple
#     for name in names:
#         print(f'{greeting} {name}')

# greet('Heya', 'Jack', 'Tal', 'Mia', 'Jenny', 'Claire')

# or instead of *names etc... *args - need to print to figure out whats going on... **kwargs - keyword arguments

def greet(**kwargs):
    # print(kwargs.items())
    for name, greeting in kwargs.items():
        print(f'{greeting} {name}')

greet(MAT='Hey', Mark='Hello', Adam='Yo')