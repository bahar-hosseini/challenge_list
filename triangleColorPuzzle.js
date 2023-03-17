const  triangle = (row) =>{
  if (row.length === 1) {
    return row;
  }
  let temp = "";
  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] === row[i + 1]) {
      temp += row[i];
    } else if (row[i] === "B" && row[i + 1] === "G" || row[i] === "G" && row[i + 1] === "B") {
      temp += "R";
    } else if (row[i] === "R" && row[i + 1] === "G" || row[i] === "G" && row[i + 1] === "R") {
      temp += "B";
    } else if (row[i] === "R" && row[i + 1] === "B" || row[i] === "B" && row[i + 1] === "R") {
      temp += "G";
    }
    
    return triangle(temp);
  }
};

console.log(triangle('RBRGBRBGGRRRBGBBBGG'));