using System;

class Result
{

  /*
   * Complete the 'miniMaxSum' function below.
   *
   * The function accepts INTEGER_ARRAY arr as parameter.
   */

  public static void miniMaxSum(List<int> arr)
  {
    long sum = 0;
    long max = long.MinValue;
    long min = long.MaxValue;

    for (int i = 0; i < arr.Count; i++)
    {
      sum += arr[i];
      if (arr[i] < min)
      {
        min = arr[i];
      }
      if (arr[i] > max)
      {
        max = arr[i];
      }
    }
    Console.WriteLine($"{sum - max} {sum - min}");
  }

}