# def biggie_size(arr):
#     for i in range(len(arr)):
#         if(arr[i]>0):
#             arr[i]="big"
#     return arr
# print(biggie_size([-1, 3, 5, -5]))

# ///////////////////////////
# def count_positives(arr):
#     temp=[]
#     for i in range(len(arr)):
#         if(arr[i]>0):
#             temp.append(i)
#     arr[len(arr)-1]=len(temp)
#     return arr
# print (count_positives([1,6,-4,2,7,9,-7,-2]))

# ///////////////////////////
def sum_total(arr):
    sum=0
    for i in range( 0 , len(arr) , 1):
        sum =sum+arr[i]
    return(sum)
# print(sum_total([1,2,3,4]))           n*(n+1)/2

# /////////////////////////////////
def average(arr):
    sum=0
    average=0
    # for i in range(0 , len(arr) , 1):
    #     sum +=arr[i]
    sum = sum_total(arr)
    average=sum/len(arr)
    return (average)
# print (average([1,2,3,4]))

# //////////////////////////////////
def length (list):
    temp=0
    for i in range(len(list)):
        temp = temp+1
    return len(list)
# print(length([37,2,1,-9]))

# ////////////////////////
def minimum(arr):
    if (arr==[]):
        return ("false")
    temp=arr[0]
    for i in range (len(arr)):
        if(arr[i]<temp):
            temp=arr[i]         
    return temp
# print(minimum([37,12,2,-3,1,-9,1]))

# /////////////////////////////////
def maximum(list):
    if (list==[]):
        return False
    temp=list[0]
    for i in range(len(list)):
        if(list[i]>temp):
            temp=list[i]
        return temp
# print(maximum([37,2,1,-9]))

# /////////////////////////////////////////
def ultimate_analysis(list):
    qew={"sum":sum_total(list) ,"avg":average(list) ,"minimum":minimum(list),"maximum":maximum(list),"length":length(list)}
    return qew
print(ultimate_analysis([37,2,1,-9]))