const flattenArray = (arr) =>{
  let flattend = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      flattend = flattend.concat(flattenArray(element));
    } else {
      flattend.push(element);
    }
  });
  return flattend;
};


const flattenArray2 = (array)=>{
  return array.reduce((flatted,toFlatten)=>{
    return flatted.concat(Array.isArray(toFlatten) ? flattenArray2(toFlatten) : toFlatten);
  },[]);

};