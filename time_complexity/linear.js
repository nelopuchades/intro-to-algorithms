// Approach 2 - Track min and max

const hotels = [
  { price: 200, brand: "Estin" },
  { price: 50, brand: "Best Eastern" },
  { price: 175, brand: "Radishin" },
];

let min = hotels[0];
let max = hotels[0];

for (let i = 0; i < hotels.length; i++) {
  const currHotel = hotels[i];
  if (currHotel.price < min.price) min = currHotel;
}

for (let i = 0; i < hotels.length; i++) {
  const currHotel = hotels[i];
  if (currHotel.price > max.price) max = currHotel;
}

console.log(`Max hotel is ${max.brand} with a price of $${max.price}`); // Estin - $200
console.log(`Min hotel is ${min.brand} with a price of $${min.price}`); // Best Eastern - $50

// We consider this 2n because as the data grows, the amount of work increases by 2
