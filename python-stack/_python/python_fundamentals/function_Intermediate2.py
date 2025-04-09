# x = [ [5,2,3], [10,8,9] ] 
# students = [
#     {'first_name':  'Michael', 'last_name' : 'Jordan'},
#     {'first_name' : 'John', 'last_name' : 'Rosales'}
# ]
# sports_directory = {
#     'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
#     'soccer' : ['Messi', 'Ronaldo', 'Rooney']
# }
# z = [ {'x': 10, 'y': 20} ]

# ////////////////////////////////
# x[1][0]=15
# for i in range(len(x)):
#     for j in range (len (x[i])):
#         if x[i][j]==10:
#             x[i][j]=15
# print(x)

# ///////////////////////////////////
# students[0]['last_name']='bretny'
# print (students)

# /////////////////////
# sports_directory['soccer'][0]='Andres'
# print(sports_directory)

# /////////////////////////////////////
# z[0]['y']=30
# print(z)

students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}]
students1 = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'sondoh', 'last_name' : 'subhi'}]
students2 = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'batata', 'last_name' : 'batata'}]

#//////////////////////////
def iterateDictionary(list,key1,key2):
    for i in range (len(list)):
        # print (list[i])
        print(f"first_name:{list[i][key1]},last_name: {list[i][key2]}")

# iterateDictionary(students2,"first_name","last_name")


# students = [
#         {'first_name':  'Michael', 'last_name' : 'Jordan'},
#         {'first_name' : 'John', 'last_name' : 'Rosales'},
#         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#         {'first_name' : 'KB', 'last_name' : 'Tonel'}]
# # ///////////////////////////////
# def iterateDictionary2(key_name, some_list):
#     for i in range (len(some_list)):
#         # print(i[key_name])
#         print(some_list[i][key_name])

# iterateDictionary2('first_name',students)


# dojo = {
#    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
#    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
# }

# # ///////////////////////////////
# def printInfo(some_dict):
#     for i in  (some_dict):
#         # print(len(some_dict))
#         print(i,len(some_dict[i]))
#         for x in (some_dict[i]):
#             print(x)
#         print("")


# printInfo(dojo)


