const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(2, 5));

const student = {
  name: "Ayub",
  age: "30",
  roll_no: 20,
  greet: function () {
    console.log(
      "Hi, I am " + this.name,
      ",age: " + this.age,
      ",roll_no: " + this.roll_no
    );
  },
};
// console.log(student);

student.greet();
