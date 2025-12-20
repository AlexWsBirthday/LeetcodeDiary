# Prefix-Sum

`array`, `array of ints`, `integers`

## What is the Main Idea of Prefix-Sum?

The main idea that encompasses prefix-sum is _remembering the total sum of the integers that have been encountered so far, while traversing an array._ This is done by adding up all previous integers encountered, creating a new integer representing the sum collected. That way, the time complexity is O(n)— _we are only going through the array of integers **once,** precalculating the total of the past integers we've come across thus far, and storing the new values into a new array._

| Array Given:                         | 1   | 2   | 3   | 4   | 5   |
| ------------------------------------ | --- | --- | --- | --- | --- |
| **New Array w/ precalculated sums:** | 1   | 3   | 6   | 10  | 15  |

## Higher Lvl Explanation

1. Traverse through the array (_This would be a for loop, being the source of the **O(n)** time complexity as the time this process takes depends on how many integers, represented by n, are in the array_)

2. Add the current total of integers to the one ahead of arr[i] (so arr[i + 1])

3. Store the new value in a different array, each int representing the values we've added up so far

4. Repeat until there are no more values to add up.

**Then, when someone asks for the sum of the ints inside the array between two specific points of the array, we:**

1. Use the formula `sum(l, r) = prefix[r] - prefix[l - 1]` to look up the two points in the array, and calculate the sum.

   a. `l`, `r` represent the pointers that point at two different indexes in our given array. Between these pointers (inclusive), is the subarray of integers we want to know the total sum of.

   b. Subtracting the sums from point [r] to point [l - 1]

   **!! While the integer the right pointer marks sums up ALL OF THE INTEGERS INCLUDED IN THE TOTAL SUM SO FAR, the left pointer value(inclusive of the value it's pointing to, explaining the [l - 1]) cuts off integers we don't want to include in the total sum. Thus giving us the accurate sum of the range given.**
