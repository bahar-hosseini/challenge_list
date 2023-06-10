using System;
using System.Collections.Generic;

class Program
{
  static void Main(string[] args)
  {
    int[][] arr = new int[][]{
      new int {1,2,3},
      new int {4,5,6},
      new int {7,8,9}
    };
    Console.WriteLine(DiagonalDifference(arr));
  }
  static int DiagonalDifference(int[][] arr)
  {
    int rightLeftDiagonal = 0;
    int leftRightDiagonal = 0;

    for (int i = 0; i < arr.Count; i++)
    {
      rightLeftDiagonal += arr[i][i];
      leftRightDiagonal += arr[i][arr.Count - i - 1];
    }
    return Math.Abs(rightLeftDiagonal - leftRightDiagonal);
  }
};