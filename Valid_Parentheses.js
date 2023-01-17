// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//[(({()}))]

let isValid = function (s) {
  const openSymbol = [];
  if (s.length % 2 === 1) return false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[' || s[i] === '{' || s[i] === '(') {
      openSymbol.push(s[i]);
    } else if (s[i] === ')' && openSymbol[openSymbol.length - 1] === '(') {
      openSymbol.pop();
    } else if (s[i] === ']' && openSymbol[openSymbol.length - 1] === '[') {
      openSymbol.pop();
    } else if (s[i] === '}' && openSymbol[openSymbol.length - 1] === '{') {
      openSymbol.pop();
    } else {
      return false;
    }
  }
  return openSymbol.length === 0;
};
