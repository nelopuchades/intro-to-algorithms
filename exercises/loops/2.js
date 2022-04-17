// What is TC?

const isUnique = (arr) => {
  let result = true;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] !== arr[j]) {
        result = false;
      }
    }
  }
};

// Quadratic -> n^2
// When data grows, we still have to loop through all the data twice
