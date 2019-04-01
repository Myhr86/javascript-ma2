//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
function Person() {
  this.name = name;
}

Person.prototype.introduce = function() {
  console.log("My name is " + this.name);
};

function Janitor(name) {
  this.name = name;
}

Janitor.prototype = Object.create(new Person());

Janitor.prototype.introduce = function() {
  console.log("My name is " + this.name + ", and I am the Janitor here");
}

var janitor = new Janitor('Oliver');
janitor.introduce();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var myNumber = numbers.slice(4, 5);
console.log(myNumber);

//3. Delete the last number in the array that you created above.
delete numbers[9];
console.log(numbers);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas:
function changeText() {
  let string = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied."

  string = string
    .replace('Strawberry', 'Banana')
    .replace('strawberry', 'banana')
    .replace('strawberries', 'bananas');

  console.log(string);
}
changeText();

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var myFootballClubs = ["Manchester United", "Arsenal", "Aston Villa", "Liverpool"];
replace.addEventListener("click", function() {
  myFootballClubs.splice(0, 4, "Volvo", "Mercedes", "BMW", "Audi");
  console.log(myFootballClubs);
});

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
var people = [
  {
    name: "Stein",
    age: 32
  },
  {
    name: "Frank",
    age: 56
  },
  {
    name: "Anna",
    age: 23
  }
]

var peopleNames = people.filter(function(person) {
  return console.log(person.name === "Frank");
});

//7. Create a simple function that logs the date.
var date = new Date();

function logDate() {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  console.log(day + "/" + month + "/" + year);
}

logDate();
