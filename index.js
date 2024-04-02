// function calculateAverage(a, b, c) {
//   return (a + b + c) / 3;
// }

const calculateAverage = (a, b, c) => (a + b + c) / 3;
console.log(calculateAverage(10, 10, 10));

// function multiplicationFunc(a, b, c) {
//   if (c === undefined) {
//     c = 4;
//   }
//   return a * b * c;
// }
// console.log(multiplicationFunc(3, 1)); // 12
// console.log(multiplicationFunc(3, 10)); // 120

const multiplicationFunc = (a, b, c) => {
  c === undefined ? (c = 4) : c;
  return a * b * c;
};

console.log(multiplicationFunc(3, 1));
console.log(multiplicationFunc(3, 10));

//Write an arrow function named combineWords that takes a number of strings as arguments and concatenates them into one a sentence.

const combineWords = (...str) => str.join(" ");

console.log(combineWords("This", "is", "an", "amazing", "day"));
// Output: This is an amazing day

//Write an arrow function called combineArrays that takes two arrays and merges them into one.

const combineArrays = (arr1, arr2) => [...arr1, ...arr2];

console.log(combineArrays([10, 20, 30], [40, 50, 60]));
// Output: [10, 20, 30, 40, 50, 60]

//Write an arrow function that uses the rest parameter to concatenate strings with a specified separator.

const concatenateWithSeparator = (seperator, ...restValues) =>
  restValues.join(seperator);

console.log(
  concatenateWithSeparator(
    "->",
    "Violet",
    "Indigo",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
    "Red",
  ),
);
// Output: Violet->Indigo->Blue->Green->Yellow->Orange->Red

//Console individual values of the product object using object destructuring.
const product = {
  title: "iPhone",
  price: 5999,
  description: "The iPhone is a smartphone developed by Apple",
};

const { title, price, description } = product;
console.log(title);
console.log(price);
console.log(description);

// Expected Output:
// iPhone
// 5999
// The iPhone is a smartphone developed by Apple

//Write an arrow function that takes an object car and returns true if the car is a sports car (i.e. has a horsepower property greater than or equal to 300)

const car1 = { make: "Porsche", model: "911", horsepower: 450 };
const car2 = { make: "Toyota", model: "Camry", horsepower: 200 };

const isSportsCar = (car) => (car.horsepower > 300 ? true : false);

console.log(isSportsCar(car1)); // true
console.log(isSportsCar(car2)); // false

//Convert the function getData, into an ES6 function with least amount of characters.

// function getData(person) {
//   const name = person.name;
//   const address = person.address.city;
//   console.log(name); // John Doe
//   console.log(address); // New York
// }

// const getData = (person) => {
//   const { name, address: {city} } = person;
//   console.log(name);
//   console.log(address.city);
// };

const getData = ({ name, address: { city } }) => console.log(name, city);

const person = {
  name: "John Doe",
  address: {
    city: "New York",
    state: "NY",
  },
};
getData(person);

//Write an ES6 function that takes few numbers and returns the sum of first element and the last element.

const sumFirstElement = (first, ...nums) => first + nums[nums.length - 1];
console.log(sumFirstElement(1, 2, 3, 5)); // Output: 6

//Write a function that takes an object representing a person's information (name, age, occupation) and returns a template literal that includes the person's name and age in a sentence.

const person1 = { name: "John", age: 25, occupation: "Software Engineer" };
const person2 = { name: "Jane", age: 45, occupation: "Data Analyst" };

const personInfo = ({ name, age }) => `${name} is ${age} years old.`;
console.log(personInfo(person1)); // Expected output: "John is 25 years old."
console.log(personInfo(person2)); // Expected output: "Jane is 45 years old."

// Write a function findPerson that takes an array of person objects and a name as parameters and returns the object with the matching name, or "Not Found" if not found.

const findPerson = (arr, name) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === name) {
      return arr[i];
    }
  }
  return "Not Found";
};

console.log(
  findPerson(
    [
      { name: "Amay", age: 25 },
      { name: "Akhil", age: 25 },
    ],
    "Akhil",
  ),
);

//// 12. Write an ES6 function with minimum characters that uses
// destructuring to extract the first two elements from an array,
// and returns them in an object with keys 'first' and 'second'.

const pickFirstAndSecond = ([first, second]) => ({
  first: first,
  second: second,
});

console.log(pickFirstAndSecond(["orange", "banana", "apple"]));
// {first: 'orange', second: 'banana'}

console.log(pickFirstAndSecond(["red", "blue", "green"]));
// {first: 'red', second: 'blue'}
