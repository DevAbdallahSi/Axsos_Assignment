import unittest

# MathDojo class with add and subtract methods
class MathDojo:
    def __init__(self,result):
        self.result = result
    
    def add(self, num, *nums):
        self.result += num  # Add the first number
        for i in range(len(nums)):  # Add each additional number
            self.result += nums[i]
        return self
    
    def subtract(self, num, *nums):
        self.result -= num  # Subtract the first number
        for i in range(len(nums)):  # Subtract each additional number
            self.result -= nums[i]
        return self

md=MathDojo(10)
md.add(3,3)
md.subtract(2)
print(md.result)
# Test cases for the MathDojo class
# class sumTest(unittest.TestCase):
    # def setUp(self):
    #     """This method will run before each test."""
    #     self.md = MathDojo()  # Create a fresh instance of MathDojo for each test

    # def test_add(self):        
    #     self.md.add(5, -6, 5)  # Add 5, -6, and 5
    #     self.assertEqual(self.md.result, 4)  # The expected result is 4

    # def test_subtract(self):
    #     self.md.subtract(5, -6, 5)  # Subtract 5, -6, and 5
    #     self.assertEqual(self.md.result, -4)  # The expected result is -4

    # def test_combined_operations(self):
    #     """Testing combined add and subtract operations"""
    #     result = self.md.add(2, 2).add(2, 5, 1).add(3, 3, 1).subtract(3, 2).result
    #     self.assertEqual(result, 14)  # The expected result is 5

# if __name__ == '__main__':
#     unittest.main()  # This runs all the test cases


