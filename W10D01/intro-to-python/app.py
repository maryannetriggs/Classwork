# DATATYPES
# STRINGS

# string_one = "This is a string"
# string_two = 'This is also a string'
# escape_string = '\'Hello There\' he said'
# multi_line_string = '''
#   This is a multi line string
#   I will respect the line breaks!!
# '''
# name = 'Mary-Anne'
# age = 32
# format_string = f'My name is {name} and I am {age}'
# concat_string = 'My name is ' + name + ' and I am ' + str(age)
# #other_string_format = 'My name is %s and I am %s'(name, age) - something like this
# raw_string = r'This\'ll not come out as expected'

# print(string_one)
# print(string_two)
# print(escape_string)
# print(multi_line_string)
# print(format_string)
# print(concat_string)
# #print(other_string_format)
# print(raw_string)

# print(type(string_one))

# NUMBERS

# print(type(1))
# print(type(1.5))

#BOOLEANS

# print(type(True))
# print(type(False))

# Falsey Values
# None (null in js)
# False
# 0
# 0.0
# ''
# [] (truthy in js)
# {} (truthy in js - I think)
# ()
# set()
# range(0)

# NO UNDEFINED & all other values are truthy.

#COMPARISONS

# print(True == 1)
# print('1' == 1)

# Also have <, >, <=, >=

# print(True and True) - same as (true && true)
# && is &
# || is or
# !== is not
# print(not True)


# TENERARY OPERATOR
# a = 10
# b = 20 if a < 10 else 40

# print(b)

# IF STATEMENTS

# a = 10

# if a < 5:
#     print('too small')
# elif a > 10:
#     print('too big')
# else:
#     print('just right...')

name = input('What is your name? ')
# print(f'Your name is {name}')

if name == 'Mary-Anne':
    print('Hi')
else:
    print('Who the hell are you?!?!')
print('This line always runs as it is outside the indented block above')
