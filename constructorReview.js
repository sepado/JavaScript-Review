//Create a Animal Constructor that has the following parameters. 
//species, name, legs, color, food (which is an array of foods they can eat).
//code here
function Animal(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}

//Now create a person function that creates an object and returns it 
//(not in constructor form) that has the following parameters. name, age, 
//height, gender
//code here
function createPerson(name, age, height, gender) {
  var person = {
    n: name,
    a: age,
    h: height,
    g: gender
  }
  return person;
}

//Create a animal array and a person array.
//code here
var animal = [];
var person = [];

//Create two instances of Animal and push those into your animal array
//code here
var animal1 = new Animal('homo', 'gorilla', 4, 'black/white', 'grass');
var animal2 = new Animal('reptile', 'snake', 0, 'red', 'insects');
animal.push(animal1, animal2);

//Create two instances of person and push those into your person array.
//code here
var sean = createPerson('Sean', 21, '5ft10in', 'male');
var brendan = createPerson('Brendan', 18, '6ft0in', 'male');
person.push(sean, brendan);

//Now we want every instance of Animal to have a eat method. This method 
//will choose a random item in that instances food array, then alert
// "(name) ' ate ' (whichever food was chosen)".
//code here
Animal.prototype.randomFood = function() {
  var ranNumInArr = Math.floor((Math.random() * animal.length));
  var food = animal[ranNumInArr].food;
  return alert(this.name + ' ate ' + food);
}

//At this point, if we wanted to add something to every istance of person 
//could we? 
//Yes or no? and why or why not?

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

/*
  1) What happens when you use the 'new' keyword to call a Constructor 
  function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that 
  object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/