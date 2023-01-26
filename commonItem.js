const commonItem = (array1, array2) => {
  const obj = {};
  for (const i of array1) {
    if (!obj[i]) {
      obj[i] = true;
    }
  }

  for (const j of array2) {
    if (obj[j]) {
      return true;
    }
  }
  return false;

  //Second method
  // return array1.some(array2.includes(item))
};

// we have two array
// if input :
//const array1 = ['a','b','c','x']
//const array2 = ['v','w','t']
// return false
//-----------------------
// if input :
//const array1 = ['a','b','c','n']
//const array2 = ['x','t','a']
//return true

// input : two arrays : no size limit
//output : boolean : true/false

//Q1 : How long each array can be?
//Q2 :Time complexiti is more important or Space complexity

//First thing comes to my mind -> nested for loop O(n^2) ->time complexity O(a*b) / O(1) space complexity
//Second thing comes to my mind -> using obj/ hash map ->time complexity O(a + b) / O(a) space complexity
//third ->built in method -> return array1.some(array2.includes(item))
