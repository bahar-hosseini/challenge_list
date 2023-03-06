//832. Flipping an Image

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
let flipAndInvertImage = function(image) {
  for (let i = 0; i < image.length; i++) {
    let left = 0;
    let right = image.length - 1;

    while (left < right) {
      //flip
      let temp = image[i][left];
      image[i][left] =  image[i][right];
      image[i][right] = temp;

      //invert
      image[i][left] = 1 - image[i][left];
      image[i][right] = 1 - image[i][right];
      left++;
      right--;
    }
    if (left === right) {
      image[i][left] = 1 - image[i][left];
    }
  }


  return image;
};
console.log(flipAndInvertImage([[1,1,1,0],[1,0,1],[0,0,0]]));
//First : horizentaly flip -> reverse
//Second : 0 -> 1 / 1 -> 0

