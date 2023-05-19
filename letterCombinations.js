//17. Letter Combinations of a Phone Number

const letterCombinations = (digits)=>{
  let result = [];
  if (!digits) return result;
  const phone = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  //dfs recursive helper
  const dfs = (i,digits,slate)=>{
  // base case
    if (i === digits.length) {
      result.push(slate.join(''));
      return;
    }

    //dfs recursive case
    let chars = phone[digits[i]];
    console.log(chars);
    for (let c of chars) {

      slate.push(c);
      dfs(i + 1, digits, slate);
      slate.pop();
    }
  };
  dfs(0,digits,[]);
  return result;
};
console.log(letterCombinations("23"));