# arr = [5,8,3,90,7,6,4,20,45]
# n=arr
# for i in range (n-1):
#     for x in range (n-1-i):
#         if (n[x]>n[x+1]):
#             (n[x],n[x+1]=n[x+1],n[x])
# print(n)
# class Node:
#     def __init__(self,data):
#         self.data=data
#         self.next=None
#         head=None
#         newNode=Node()
#         newNode.data=1
#         newNode.next=None
#         if head is None :
#             head=newNode
#         else:
#             temp=head
#             while temp.next is not None:
#                 temp=temp.next
#             temp.next=newNode
            
class Node():
    def __init__(self,data=None):
        self.data=data
        self.next=None
head = None
for i in range (1,6):
    new_Node=Node(i)
    if head is None :
        head=new_Node
    else:
        temp = head
        while temp.next is not None:
            temp=temp.next
        temp.next=new_Node
temp=head
while temp is not None:
    print(temp.data, end=" ")
    temp=temp.next
print(temp)


        
