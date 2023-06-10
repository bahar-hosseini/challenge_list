using System;

class Result
{

  public static void plusMinus(List<int> arr)
  {
    int length = arr.Count;
    int positive = 0;
    int negative = 0;
    int zero = 0;
    for (int i = 0; i < length; i++)
    {
      if (arr[i] < 0)
      {
        negative++;
      }
      else if (arr[i] == 0)
      {
        zero++;
      }
      else if (arr[i] > 0)
      {
        positive++;
      }
    }
    double positiveRatio = (double)positive / length;
    double negativeRatio = (double)negative / length;
    double zeroRatio = (double)zero / length;

    Console.WriteLine(positiveRatio.ToString("N6"));
    Console.WriteLine(negativeRatio.ToString("N6"));
    Console.WriteLine(zeroRatio.ToString("N6"));
  }
}