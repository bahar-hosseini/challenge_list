// 139. Word Break

const wordBreak = (s, wordDict) =>{
  const table = new Array(s.length + 1).fill(false);
  table[0] = true;
  for (let i = 0; i < table.length; i ++) {
    if (table[i] === false) continue;
    for (let j = i + 1; j < table.length; j++) {

      if (wordDict.includes(s.slice(i,j))) {
        table[j] = true;
      }
    }
  }
  return (table[table.length - 1]);
};

console.log(wordBreak("catsandog",["cats","dog","sand","and","cat","og"]));
// console.log(wordBreak("leetcode",["leet","code"]));