using System;

class Result
{

  /*
   * Complete the 'birthdayCakeCandles' function below.
   *
   * The function is expected to return an INTEGER.
   * The function accepts INTEGER_ARRAY candles as parameter.
   */

  public static int birthdayCakeCandles(List<int> candles)
  {
    int maxNumber = int.MinValue;
    int count = 0;

    for (int i = 0; i < candles.Count; i++)
    {
      if (maxNumber < candles[i])
      {
        maxNumber = candles[i];
      }
    }

    for (int i = 0; i < candles.Count; i++)
    {
      if (candles[i] == maxNumber)
      {
        count++;
      }
    }

    return count;
  }
}