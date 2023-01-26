import math

checkList1 = [1, 2, 4, 8, 0, 5, 3, 5]

# ---- Summary (Összegzés) - Sum of the numbers in the list

def summary(list):
    sum = 0
    for i in list:
        sum += i
        
    return sum

## We can do it with python's built in sum() method too. The first argument is the list, and there's an optional second argument, an integer which will be added to the sum of the list.

summaryWithSum = lambda list: sum(list)

## print(summary(checkList1))

## print(summaryWithSum(checkList1))

# ---- Counting (Megszámlálás) - How many even / odd numbers are in the list?

def countOfEvens(list):
    even = 0
    for i in list:
        if i % 2 == 0:
            even += 1
            
    return even

# print(f'There\'s {countOfEvens(checkList1)} even numbers in the list.')

## With built in filter function and lambda. Because filter's return value is an iterator (object that contains a countable number of values), we have to convert it to a list with the list() method.

numberOfEvens = filter(lambda even: even % 2 == 0, checkList1)


## print(len(list(numberOfEvens)))
    
# ---- Decision (Eldöntés) - Is there any 0 in the list?

def decision(list):
    i = 0
    while i < len(list) & i != 0:
        i += 1
    
    if i < len(list):
        return 'Yes, there\'s 0 in the list.'
    else:
        return 'No, there\'s not 0 in the list.'
    
## print(f'Is there any 0 in the lis?\n{decision(checkList1)}')


# Selection (Kiválasztás) - Return the index of the given number

def indexOfElement(list):
    pos = 0
    while list[pos] != 8:
        pos += 1
        
    return pos

## print(f'The index of 8 from the list is {indexOfElement(checkList1)}.')

# Copy - Double the element of a list and copy into a new list

# 1. with for loop

def doubleElements(list):
    newList = []
    
    for i in list:
        newList.append(i * 2)
        
    return newList

## print(doubleElements(checkList1))

# 2 with lambda

doubled = map(lambda num: num * 2, checkList1)

## print(list(doubled))

# Sorting (Szétválogatás) - 3 and smallers and greater than 3 into separate array.

def sorting(list):
    smaller = []
    greater = []
    
    for i in list:
        if i <= 3:
            smaller.append(i)
        else:
            greater.append(i)
            
    return f'Smaller and equal than 3: {sorted(smaller)}\nGreater than 3: {sorted(greater)}'

## print(sorting(checkList1))

# Section (Metszet) - The common elements of two lists into a new one

listA = [1, 43, 4, 8, 9, 20, 3, 5]
listB = [99, 43, 2, 117, 97, 20, 10, 5]

def section(list1, list2):
    commonList = []
    for i in list1:
        for j in list2:
            if i == j:
                commonList.append(i)
                
    return sorted(commonList)

## print(section(listA, listB))

# Union - Elements of two lists into a new list, but every element must be unique!

def union(list1, list2):
    unionList = []
    
    for i in list1:
        unionList.append(i)
        
    for j in list2:
        if j not in unionList:
            unionList.append(j)
            
    return unionList

# print(union1(listA, listB))

# Minimum, Maximum - The minimum and the maximum element of a list


listka = [99, 43, 2, 117, 1, 43, 4, 8, 9, 20, 3, 5, 97, 20, 10, 5]

def minimum(list):
    min = list[0]
    
    for i in list:
        if i < min:
            min = i
            
    return min

# print(minimum(listka))

minVal = lambda list: min(list)

# print(minVal(listka))

def maximum(list):
    max = list[0]
    
    for i in list:
        if i > max:
            max = i
            
    return max

# print(maximum(listka))

maxVal = lambda list: max(list)

# print(maxVal(listka))

# Bubble sort algorithm

def bubbleSort(list):
    for i in range(len(list)):
        for j in range(0, len(list) - i - 1):
            if list[j] > list[j + 1]:
                temp = list[j]
                list[j] = list[j + 1]
                list[j + 1] = temp
                
    return list

## print(bubbleSort(listka))

# Binary search - Returns the index of the given value from the !ORDERED! list

def binarySearch(list, value):
    firstIndex = 0
    lastIndex = len(list) - 1
    middleIndex = math.floor((firstIndex + lastIndex) / 2)
    
    while list[middleIndex] != value & firstIndex < lastIndex:
        if value < list[middleIndex]:
            lastIndex = middleIndex - 1
        elif value > list[middleIndex]:
            firstIndex = middleIndex + 1
        middleIndex = math.floor((firstIndex + lastIndex) / 2)

    if list[middleIndex] != value:
        return -1
    else:
        return middleIndex
    
## print(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 5))