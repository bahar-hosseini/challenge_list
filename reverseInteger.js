//  7. Reverse Integer;

const reverse = (x) =>{
  if (x < 0) return reverse(-x) * -1;
  let result = x.toString().split('').reverse().join('');

  return result < 2 ** 31 - 1 ? result : 0;
};
console.log(reverse(-123));