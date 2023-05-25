//28. Find the Index of the First Occurrence in a String


const firstOccurrence = (haystack, needle) => {
  const match = (haystack.match(needle));
  if (match) return match.index;
  return -1;
};

console.log(firstOccurrence("sadbutsad","sad"));
console.log(firstOccurrence("leetcode","leeto"));