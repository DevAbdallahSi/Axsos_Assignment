import random

def randInt(min=0, max=100):
    num = random.random()
    scaled_num = num * (max - min) + min
    rounded_num = round(scaled_num)
    if rounded_num < min:
        return min
    elif rounded_num > max:
        return max
    else:
        return rounded_num

print(randInt())               # should print a random integer between 0 and 100
print(randInt(max=50))          # should print a random integer between 0 and 50
print(randInt(min=50))          # should print a random integer between 50 and 100
print(randInt(min=50, max=500)) # should print a random integer between 50 and 500


# def randInt(min=0, max=100):
#     return random.randint(min, max).............><><><><

# def randInt(min=0, max=100):
#     if min > max:
#         raise ValueError("min should be less than or equal to max")
#     return random.randint(min, max)).............><><><><
    # Use if statement to ensure the result is within the specified range
    # Convert the scaled float to an integer using rounding 
    # Scale the float to the range


 