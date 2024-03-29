//  278, First Bad Version

let solution = function(isBadVersion) {
  /**
   * @param {number} n Total versions
   * @return {number} The first bad version
   */
  return function(n) {
    let left = 1;
    let right = n;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};