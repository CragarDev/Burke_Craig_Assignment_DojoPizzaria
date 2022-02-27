// Craig Burke - Dojo Pizzeria -

// Create a function called pizzaOven. We should feel free to customize what information we keep track of
// for our pizza, but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings.

// Create a function called pizzaOven that returns a JavaScript (Pizza) Object

// Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]

// Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]

// Create 2 more pizzas with any toppings we like!

// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!

function pizzaOven(crust, sauce, toppings, cheese) {
  var pizza = {};
  pizza.crust = crust;
  pizza.sauce = sauce;
  pizza.toppings = toppings;
  pizza.cheese = cheese;
  return pizza;
}

var pizza1 = pizzaOven(
  "deep dish",
  "traditional",
  ["pepperoni", "sausage"],
  ["mozzarella"]
);

// console.log("Pizza 1");
// console.log(pizza1);
// console.log(pizza1.crust);
// console.log(pizza1.sauce);
// console.log(pizza1.toppings);
// console.log(pizza1.cheese);

console.log();

var pizza2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mushrooms", "olives", "onions"],
  ["mozzarella", "feta"]
);
// console.log("Pizza 2");
// console.log(pizza2);
// console.log(pizza2.crust);
// console.log(pizza2.sauce);
// console.log(pizza2.toppings);
// console.log(pizza2.cheese);

console.log();

var pizza3 = pizzaOven(
  "thin and crispy",
  "red",
  ["italian sausage", "mushrooms", "red onions"],
  ["pepper jack", "cheddar"]
);
// console.log("Pizza 3");
// console.log(pizza3);
// console.log(pizza3.crust);
// console.log(pizza3.sauce);
// console.log(pizza3.toppings);
// console.log(pizza3.cheese);

console.log();

var pizza4 = pizzaOven(
  "stuffed crust",
  "garlic parm",
  ["canadian bacon", "pineapple", "mushrooms"],
  ["mozzarella", "parmesan"]
);
// console.log("Pizza 4");
// console.log(pizza4);
// console.log(pizza4.crust);
// console.log(pizza4.sauce);
// console.log(pizza4.toppings);
// console.log(pizza4.cheese);

console.log();

// function to build a pizza with random ingredients
function generateRandomPizza() {
  // set up the variables to use to build with
  let crustArray = [
    "deep dish",
    "stuffed crust",
    "thin and crispy",
    "hand tossed"
  ];
  let sauceArray = [
    "red",
    "traditional",
    "marinara",
    "yellow mustard",
    "garlic parm"
  ];
  let toppingsArray = [
    "pepperoni",
    "sausage",
    "mushrooms",
    "olives",
    "onions",
    "italian sausage",
    "red onions",
    "canadian bacon",
    "pineapple"
  ];
  let cheeseArray = [
    "mozzarella",
    "feta",
    "pepper jack",
    "cheddar",
    "parmesan"
  ];
  let crust = "";
  let sauce = "";
  let toppings = [];
  let cheese = [];

  // get the crust
  crust = crustArray[Math.ceil(Math.random() * crustArray.length - 1)];
  // console.log(crust);

  // get the sauce
  sauce = sauceArray[Math.ceil(Math.random() * sauceArray.length - 1)];
  // console.log(sauce);

  // get the toppings

  // determine how many toppings are going on the pizza then
  // select that many toppings from the toppings array

  function getToppingsForPizza(arr) {
    // gets the random number of toppings
    let toppingsNumber = Math.ceil(Math.random() * arr.length);
    // console.log(toppingsNumber);

    // function to get an array of toppings
    function getToppingsArray(arr) {
      let dups = true;
      while (dups == true) {
        let currentToppings = [];
        for (var i = 1; i <= toppingsNumber; i++) {
          currentToppings.push(arr[getToppingSelIndex(arr)]);
        }
        dups = checkArrayForDuplicates(currentToppings);
        if (dups == false) {
          return currentToppings;
        }
      }
    }

    // checks the array for any duplicates
    // returns true if there are and false if not
    function checkArrayForDuplicates(arr) {
      for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
          if (arr[i] == arr[j]) {
            return true;
          }
        }
      }
      return false;
    }

    // returns a random number from 0 to the length of the array -1
    function getToppingSelIndex(arr) {
      return Math.floor(Math.random() * arr.length);
    }
    let finalToppings = getToppingsArray(arr);
    return finalToppings;
  }

  toppings = getToppingsForPizza(toppingsArray);

  // get the cheese
  // function to get a random amount of random cheese
  function getCheeseForPizza(arr) {
    // gets the random number of Cheese
    let cheeseNumber = Math.ceil(Math.random() * arr.length);
    // console.log(cheeseNumber);

    // function to get an array of Cheese
    function getCheeseArray(arr) {
      let dups = true;
      while (dups == true) {
        let currentCheese = [];
        for (var i = 1; i <= cheeseNumber; i++) {
          currentCheese.push(arr[getCheeseSelIndex(arr)]);
        }
        dups = checkArrayForDuplicates(currentCheese);
        if (dups == false) {
          return currentCheese;
        }
      }
    }

    // checks the array for any duplicates
    // returns true if there are and false if not
    function checkArrayForDuplicates(arr) {
      for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
          if (arr[i] == arr[j]) {
            return true;
          }
        }
      }
      return false;
    }

    // returns a random number from 0 to the length of the array -1
    function getCheeseSelIndex(arr) {
      return Math.floor(Math.random() * arr.length);
    }
    let finalCheese = getCheeseArray(arr);
    return finalCheese;
  }

  // console.log(getCheeseForPizza(cheeseArray));
  cheese = getCheeseForPizza(cheeseArray);

  // console.log("Random Pizza 1: ", crust, sauce, toppings, cheese);
  // console.log("Random Pizza 2: ", crust, sauce, toppings, cheese);

  // building the pizza with pizzaOven
  let randomPizza = pizzaOven(crust, sauce, toppings, cheese);
  return randomPizza;
}

let randomPizza1 = generateRandomPizza();

console.log("Random Pizza 1");
console.log(randomPizza1);

let randomPizza2 = generateRandomPizza();

console.log("Random Pizza 2");
console.log(randomPizza2);

console.log();
