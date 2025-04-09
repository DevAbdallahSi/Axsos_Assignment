import unittest

class MathDojo:
    def __init__(self,result=0):
        self.result = result
    
    def add(self, num, *nums):
        self.result += num 
        for i in range(len(nums)):  
            self.result += nums[i]
        return self
    
    def subtract(self, num, *nums):
        self.result -= num  
        for i in range(len(nums)):  
            self.result -= nums[i]
        return self

md=MathDojo(10)
md.add(3,3)
md.subtract(2)
# print(md.result)
# Test cases for the MathDojo class
class sumTest(unittest.TestCase):
    def setUp(self):
        self.md = MathDojo()  

    def test_add(self):        
        self.md.add(5, -6, 5)  
        self.assertEqual(self.md.result, 4) 

    def test_subtract(self):
        self.md.subtract(5, -6, 5) 
        self.assertEqual(self.md.result, -4)  

    def test_combined_operations(self):
        result = self.md.add(2, 2).add(2, 5, 1).add(3, 3, 1).subtract(3, 2).result
        self.assertEqual(result, 14)  

if __name__ == '__main__':
    unittest.main()  


