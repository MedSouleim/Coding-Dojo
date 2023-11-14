# 1
def countdown(num):
    list = []
    for i in range(num, -1, -1):
        list.append(i)
    return list
print(countdown(5))
# 2
def print_and_return(numbers):
    print("First value:", numbers[0])
    return numbers[1]
# 3
def first_plus_length(my_list):
    result = my_list[0] + len(my_list)
    return result
# 4
def values_greater_than_second(my_list):
    second_value = my_list[1]
    new_list = [value for value in my_list if value > second_value]
    print("Number of values greater than the second value:", len(new_list))
    return new_list
# 5
def create_list(size, value):
    new_list = [value] * size
    return new_list