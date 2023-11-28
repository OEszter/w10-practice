const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function(total, num) {
  return total + num;
}, "tizenkettő-");

console.log(sum)