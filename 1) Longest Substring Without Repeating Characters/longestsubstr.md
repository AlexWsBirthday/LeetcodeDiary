# Longest Substring Without Repeating Characters

## Problem

`Given a string s, find the length of the longest substring without duplicate characters.` \
In my own words: given a string, return an integer representing the \***\*number of characters\*\*** in the longest substring without repeating characters.

**In**: string \
**Out**: int

## Example

Running through it in procreate \
![Page 1 running through example string "the prettiest garage symbol is 666"](./Longest-SubS-Example-Procreate/Longest_Sub_W.O_Repeating_Char.jpg) \
![Page 2 running through example string "the prettiest garage symbol is 666"](./Longest-SubS-Example-Procreate/Longest_Sub_W.O_Repeating_Char%202.jpg) \
![Page 2 running through example string "the prettiest garage symbol is 666"](./Longest-SubS-Example-Procreate/Longest_Sub_W.O_Repeating_Char%203.jpg)

## Data Structures

1. Loop - to loop through the string
2. Obj - to keep track of the unique chars in the sub string
3. curr length variable - to track the length of the current sub string
4. longest length variable - to keep track of the longest length possible
5. length check - curr > longest ? boolean checker to see if we need to update longest

## Algorithm (Higher Level)

```
//init longest variable
let longest = Number.MIN_VALUE //accuracy

for char of s { //loop thru
  let chartracker = new map() //init map

  if chartracker.has(char) { //checking if map has s
    if chartracker.length > longest {
      longest = chartracker.length
    }

    clear char tracker
    add s[char]
  }

  //if chartrack doesn't have char?
  add char

}
```

## Code
