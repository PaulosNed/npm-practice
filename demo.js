const lodash = require("lodash");

const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Alice", age: 30 },
  { id: 3, name: "Bob", age: 20 },
];

const sortedUsers = lodash.sortBy(users, "age");
console.log('sorted:    ', sortedUsers);

const max_age = lodash.maxBy(users, "age");
console.log('Max age:    ', max_age);

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

const evenNumbers = lodash.filter(numbers, num => num % 2 === 0);
console.log('even:   ', evenNumbers);

const max_num = lodash.max(numbers);
console.log('Max:   ', max_num);
