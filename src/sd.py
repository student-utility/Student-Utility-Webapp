import math
def totalComparisons(n):
    if n < 2:
        return 0;
    if n < 3:
        return 1
    total = 1
    for i in range(1, n-1):
        total += math.floor((i - math.ceil(i/2)) / 2) + 2
    return total


for i in range(21):
   print(f'Combinations for {i} items: {totalComparisons(i)}')