const countChars = (str) => {
  return str.length;
};

countChars("dance"); // 5

countChars("walkreallyfast"); // 14

// Property lookup -> Constant
// As data grows, the time is going to remain constant because we just
// have to lookup for .length property
