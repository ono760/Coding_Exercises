# Your task is to make two functions, max and min that take 
# a vector of integers list as input and outputs, respectively, 
# the largest and lowest number in that vector.

# Examples

# max([4,6,2,1,9,63,-134,566]) returns 566
# min([-52, 56, 30, 29, -54, 0, -110]) returns -110
# max([5]) returns 5
# min([42, 54, 65, 87, 0]) returns 0
# Notes

# You may consider that there will not be any empty vectors.

def min(arr):
    arr.sort()
    return arr.pop(0)
def max(arr):
    arr.sort()
    return arr.pop()
    
print(min([-52, 56, 30, 29, -54, 0, -110]))
print(min([42, 54, 65, 87, 0]))
print(max([4,6,2,1,9,63,-134,566]))