# LISTS (arrays)

# my_list = [10, 'string', True, 'hamster']
# print(type (my_list))

# first_item = my_list[0]
# print(first_item)

# length = len(my_list)
# print(length)

# sliced = my_list[1:3]
# print(sliced)

# bigger_list = my_list + ['OMG', 'Shamazing']
# print(bigger_list)
# bigger_list.extend(['jam', 'cheese'])
# print(bigger_list)

# my_list.append('harrowwww')
# print(my_list)

# my_list.remove('hamster')
# print(my_list)

# popped = my_list.pop(1)
# print(popped)
# print(my_list)

# ITERATION

# nums = [10, 20, 30]

# FOR IN

# for num in nums:
#     print(num)

# WHILE LOOP

# i = 0
# while i < len(nums):
#     print(nums[i])
#     i = i + 1

# WITH RANGE

# print(range(len(nums)))
# for i in range(len(nums)):
#       print(i)

# Can also use ENUMERATE to get access to the index
# for index, num in enumerate(nums):
#     print(index, num, nums[index])

# (Array Methods)

# nums = [10, 20, 30]

# Using inbuilt lambda function
# mapped = list(map(lambda num: num * 2, nums))
# print(mapped)
# Using list comprehension
# mapped_with_list_comp = [num * 2 for num in nums]
# print(mapped_with_list_comp)

# nums = [11, 200, 74, 44, 33]

# even_nums = list(filter(lambda num: num % 2 == 0, nums))
# even_nums_with_comp = [num for num in nums if num % 2 == 0]
# print(even_nums)
# print(even_nums_with_comp)

# TUPLE - Immutable list

# my_tuple = (10, 'Python', True, 'hamster')
# print(my_tuple)
# print(type (my_tuple))

# DICTIONARIES - quite similar to an object but not quite (dictionaries are much simpler)

my_dict = {
  'name': 'Mary-Anne',
  'hometown': 'Portsmouth',
  'age': 32
}

# print(my_dict['age'])
# my_dict['age'] = 21
# print(my_dict['age'])

# del my_dict['hometown']
# print(my_dict)

# print(my_dict.keys())
# print(my_dict.values())
# print(my_dict.items())

# age = my_dict.get('age', 25)
# print(age)
# age = my_dict.get('colour', 25)
# print(age)
# Doesn't create a new key, just provides a placeholder just in case

# my_dict.clear()
# print(my_dict)

# Iterate

for key in my_dict:
    print(key, my_dict[key])

for key, value in my_dict.items():
    print(key)
    print(value)