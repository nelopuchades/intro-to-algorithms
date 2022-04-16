// Approach 3 - Sorted list

const hotels = [
  { price: 50, brand: "Best Eastern" },
  { price: 175, brand: "Radishin" },
  { price: 200, brand: "Estin" },
];

let min = hotels[0];
let max = hotels[hotels.length - 1];

console.log(`Max hotel is ${max.brand} with a price of $${max.price}`); // Estin - $200
console.log(`Min hotel is ${min.brand} with a price of $${min.price}`); // Best Eastern - $50

// We consider this 1, because no matter what the size of the array is, the complexity is always going to be the same
