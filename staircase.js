const staircase = (n) =>{
  let output = Array(n).fill(" ");
  for (let i = n - 1; i >= 0; i--) {
    output[i] = "#";
    console.log(output.join(""));
  }
};

console.log(staircase(6));