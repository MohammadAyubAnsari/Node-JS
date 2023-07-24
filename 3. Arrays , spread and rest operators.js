const array = ["apple", "oranges", " ", "mango", " ", "lemon"];

// console.log(array.map((item) => (item === " " ? "empty string" : item)));

console.log(
  array.map((item) => {
    return item === " " ? "empty string" : item;
  })
);
