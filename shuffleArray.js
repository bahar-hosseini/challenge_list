const shuffleArray = (array)=>{
  let temp;
  let randomIndex;
  for (let i = 0; i < array.length; i ++) {
    randomIndex = Math.floor(Math.random() * (array.length));
    temp = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
};

console.log(shuffleArray([1,2,3,4,7,4,5,6]));