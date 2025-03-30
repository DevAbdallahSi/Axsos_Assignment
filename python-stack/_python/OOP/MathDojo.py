import unittest

class MathDojo:
    def __init__(self):
        self.result = 0
    def add(self, num, *nums):
        self.result+=num
        for i in range (len(nums)):
            self.result =self.result+nums[i]
        return self
    # print(add(5,7))
    def subtract(self, num, *nums):
        for i in range(len(nums)):
            self.result -= (num + sum(nums))
        return self
    # print(subtract(10,7))

class sumTest(unittest.TestCase):
    def __init__(self):
        self.md = MathDojo()
    def testone(self):
        self.assertEqual(self.md.add(5,-6,5),4)
    def testTow(self):
        self.assertEqual(self.md.subtract(5,-6,5),-6)
        
# create an instance:
md = MathDojo()
# to test:
x = md.add(2,2).add(2,5,1).add(3,3,1).subtract(3,2).result
# print(x)    # should print 5
# run each of the methods a few more times and check the result!,,


if __name__ == '__main__':
    unittest.main() # this runs our tests


