# 1
x = [ [5,2,3], [10,8,9] ] 
x[1][0] = 15
print(x)
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
students[0]['last_name'] = 'Bryant'
print(students)
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]
z[0]['y']= str(30)
print(z)
# 2
students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
def iterateDictionary(students):
    for s in students:
        for k,v in s.items():
            print(k,v)
iterateDictionary(students)

def iterateDictionary1(students):
    for s in students:
        print(f"first_name: {s["first_name"]} , last_name: {s["last_name"]}")
iterateDictionary1(students)
# 3
def iterateDictionary2(key_name, some_list):
    for student in some_list:
        print(student.get(key_name))

iterateDictionary2('first_name', students)
iterateDictionary2('last_name', students)
# 5
dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def printInfo(dojo):
    for key, value in dojo.items():
        print(f"{len(value)} {key.upper()}")
        for item in value:
            print(item)

printInfo(dojo)








