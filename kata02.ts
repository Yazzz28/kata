/**
 * 1 - Écris une fonction sumOfEvenNumbers(numbers) qui prend en entrée un tableau d'entiers numbers et retourne la somme de tous les nombres pairs présents dans le tableau.
 */

const numbers = [1, 2, 3, 4, 5, 6];

// your code here
/*function sumOfEvenNumbers(numbers: number[]): number {
  console.log(numbers.reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc, 0));
  return numbers.reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc, 0);
}*/

function sumOfEvenNumbers(numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  console.log(sum);
  return sum;
}


/**
 * 2 - Écris une fonction maxNumber(numbers) qui prend en entrée un tableau d'entiers numbers et retourne le plus grand nombre présent dans le tableau.
 */

const numbers2 = [12, 21, 67, 36, 49, 51];

// your code here
/*function maxNumber(numbers: number[]): number {
  console.log(numbers.reduce((acc, curr) => curr > acc ? curr : acc, 0));
  return numbers.reduce((acc, curr) => curr > acc ? curr : acc, 0);
}*/

function maxNumber(numbers: number[]): number {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  console.log(max);
  return max;
}

sumOfEvenNumbers(numbers);

maxNumber(numbers2);