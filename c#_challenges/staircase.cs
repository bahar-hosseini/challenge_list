using System;

public class Program
{
  static void Main(string[] args)
  {
    Staircase(6);
  }

  static void Staircase(int n)
  {
    for (int i = 1; i <= n; i++)
    {
      string space = new string(' ', n - i);
      string hash = new string('#', i);
      Console.WriteLine(space + hash);
    }
  }
}
