//Solution using set and sliding window method (left and right pointers)
var lengthOfLongestSubstring = function (s) {
  //using pointers and a set to keep track of the characters inside of the set/length
  let charSet = new Set();

  //initializing our maxlength variable
  let maxLength = 0;

  //initialize the pointers
  let l = (r = 0);

  //now we loop through the string. right pointer continuously goes forward, while l moves under the condition that there is a duplicate character
  for (r; r < s.length; r++) {
    while (charSet.has(s[r])) {
      charSet.delete(s[l]); //remove duplicate
      l++;
    }

    charSet.add(s[r]);

    maxLength = Math.max(maxLength, charSet.size);
  }

  return maxLength;
};

let string1 = "abcabcbb" //max = 3
let string2 = "The prettiest basement number is 666" //max = 9
let string3 = "pwwkew" //max = 3

//tests
console.log(lengthOfLongestSubstring(string1))
console.log(lengthOfLongestSubstring(string2))
console.log(lengthOfLongestSubstring(string3))