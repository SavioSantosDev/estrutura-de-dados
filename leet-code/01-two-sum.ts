function twoSum(numbers: number[], target: number): number[] {
  for (let index1 = 0; index1 < numbers.length; index1++) {
    const number1 = numbers[index1];

    for (let index2 = index1 + 1; index2 < numbers.length; index2++) {
      console.count("Contador");
      const number2 = numbers[index2];
      if (number1 + number2 === target) {
        return [index1, index2];
      }
    }
  }
}

const caso1 = [15, 11, 2, 7];
const target1 = 9;

console.log(twoSum(caso1, target1));
