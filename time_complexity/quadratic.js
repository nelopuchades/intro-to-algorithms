// Approach 1 - Compare all numbers one to another

const hotels = [
  { price: 200, brand: "Estin" },
  { price: 50, brand: "Best Eastern" },
  { price: 175, brand: "Radishin" },
];

let min, max;

for (let i = 0; i < hotels.length; i++) {
  const hotel = hotels[i];
  for (let j = 0; j < hotels.length; j++) {
    if (hotels[j].price < hotel.price) min = hotels[j];
    if (hotels[j].price > hotel.price) max = hotels[j];
  }
}

console.log(`Max hotel is ${max.brand} with a price of $${max.price}`); // Estin - $200
console.log(`Min hotel is ${min.brand} with a price of $${min.price}`); // Best Eastern - $50

// We call this n^2, where n is the number of hotels. As n grows, the amount of work increases at that rate
