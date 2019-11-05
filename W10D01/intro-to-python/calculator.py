import math

working = 'Y'

while working == 'Y':
    num1 = float(input('Please enter the first number for calculating '))
    num2 = float(input('Please enter the second number for calculating '))
    op = input('Please enter the operator you wish to calculate with ')

    print(num1, num2, op)

    if op == '+':
        print(num1 + num2)
    elif op == '-':
        print(num1 - num2)
    elif op == '*':
        print(num1 * num2)
    elif op == '/':
        print(num1 / num2)
    elif op == 'pow':
        print(num1 ** num2)
    elif op == 'sqrt':
        print(math.sqrt(num1))
    else:
        print('Invalid operator input, please try again :)')

    working = input('Would you like to do another calculation? Y or N? ')
