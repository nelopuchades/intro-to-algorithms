const uniqSort = (arr) => {
  const breadcrumbs = [];

  return arr.sort((a, b) => a - b);
};

console.log(uniqSort([4, 2, 2, 3, 2, 2, 2])); // 2, 2, 2, 2, 2, 3, 4

// Task: Transform this simple sorting algorithm into a unique sort. It should
// not return any duplicate values in the sorted array

// input: [1,5,2,1] => output: [1,2,5]
// input: [4,2,2,3,2,2,2] => output: [2,3,4]

const uniqSortWithoutDuplicates = (arr) => {
  const breadcrumbs = {};
  const noDuplicatesArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!breadcrumbs[arr[i]]) {
      noDuplicatesArr.push(arr[i]);
      breadcrumbs[arr[i]] = true;
    }
  }

  return noDuplicatesArr.sort((a, b) => a - b);
};

console.log(uniqSortWithoutDuplicates([4, 2, 2, 3, 2, 2, 2])); // 2, 3, 4
console.log(uniqSortWithoutDuplicates([1, 5, 2, 1])); // 1, 2, 5
