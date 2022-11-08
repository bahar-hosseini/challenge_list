/**
 Question:
345. Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 */

const reverseVowels = (s) => {
  let j = 0;

  let array = s.split('');
  let vowel = '';

  const isVowel = (c) => {
    return (
      c === 'a' ||
      c === 'A' ||
      c === 'e' ||
      c === 'E' ||
      c === 'i' ||
      c === 'I' ||
      c === 'o' ||
      c === 'O' ||
      c === 'u' ||
      c === 'U'
    );
  };

  for (let i = 0; i < array.length; i++) {
    if (isVowel(array[i])) {
      vowel += array[i];
      j++;
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (isVowel(array[i])) {
      array[i] = vowel[--j];
    }
  }
  return array.join('');
};
