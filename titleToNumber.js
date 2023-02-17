// 171. Excel Sheet Column Number

/**
 * @param {string} columnTitle
 * @return {number}
 */
let titleToNumber = function(columnTitle) {
  let result = 0;
  let j = 0;
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    let letter = columnTitle.charCodeAt(i) - 64;
    result += letter * (26 ** j);
    j++;

  }
  return result;
};

//input :string
//output: number
// letter -> ASCII : A :065 Z:90
//"AB" -> A * (26 ** 1) + B * (26 ** 0) /// output: 28;