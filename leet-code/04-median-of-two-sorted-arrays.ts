function findMedianSortedArrays(array1: number[], array2: number[]): number {
  const mergedArray = [...array1, ...array2].sort((a, b) => a - b);

  // if (mergedArray.length % 2 === 0) {
  if ((mergedArray.length & 1) === 0) {
    const half1 = mergedArray[mergedArray.length / 2];
    const half2 = mergedArray[mergedArray.length / 2 - 1];
    return (half1 + half2) / 2;
  }

  const halfArrayPosition = parseInt(String(mergedArray.length / 2));
  return mergedArray[halfArrayPosition];
}
