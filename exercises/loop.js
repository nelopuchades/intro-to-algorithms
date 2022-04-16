// What is the TC?

const countChars = (str) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    count++;
  }

  return count;
};

countChars("dance"); // 5

countChars("walkreallyfast"); // 14

// For -> Linear
// As data grows (length of word), the time grows linearly
