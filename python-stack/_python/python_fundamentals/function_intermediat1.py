# import random
# def randInt(min= 0 , max= 100):
#     return random.randint(min, max)
# print(randInt())             # should print a random integer between 0 to 100
# print(randInt(max=50))         # should print a random integer between 0 to 50
# print(randInt(min=50))         # should print a random integer between 50 to 100
# print(randInt(min=50, max=500)) 


import random

def randInt(min=0, max=100):
    # Generate a random float between 0 and 1
    num = random.random()

    # Scale the float to the desired range
    scaled_num = num * (max - min) + min
    
    # Convert the scaled float to an integer using rounding (this gives a random integer in the range)
    rounded_num = round(scaled_num)

    # Use if statement to ensure the result is within the specified range
    if rounded_num < min:
        return min
    elif rounded_num > max:
        return max
    else:
        return rounded_num

# Testing the function
print(randInt())               # should print a random integer between 0 and 100
print(randInt(max=50))          # should print a random integer between 0 and 50
print(randInt(min=50))          # should print a random integer between 50 and 100
print(randInt(min=50, max=500)) # should print a random integer between 50 and 500


