/* Declare and Define the functions here that will make the function calls below 
work properly */
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function first(arr, callback) {
  callback(arr[0]);
}

first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function last(arr, callback) {
  callback(arr[arr.length -1]);
}

last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the contains function return a boolean value for if the name is in the 
//array or not.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function contains(str, arr, callback) {
  for (var i = 0; i < str.length; i++) {
    if(arr[i] === str) {
      callback(true);
    }
  }
}

contains('Colt', names, function(yes){
  if(yes){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a 
//transformation function
var newArr = []; 
function map(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    var num = callback(arr[i]);   // Step 1
    newArr.push(num); // step 3
  }
  return newArr;
}

map(numbers, function(num){
  return num * 2; // Step 2 
  //returns an array of [2,4,6,8,10],
});


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function uniq(arr, callback) {
  var uniqArr = {};
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    uniqArr[arr[i]] = null;
  }
  for (key in uniqArr) {
    newArr.push(key);
  }
  callback(uniqArr);
}

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function each(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    var indice = i;
    callback(item, indice);
  }
}

each(names, function(item, indice){
  console.log('The item in the ' + indice + 'position is ' + item)
});


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

function getUserById(str, arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].id === str) {
      var user = arr[i];
      callback(user);
    }
  }
}

getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//Looks through each value in the list, returning the first one that passes a truth test 
var numbers  = [1, 2, 3, 4, 5, 6];

function find(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    var num = callback(arr[i]);
    if (num === true) {
      console.log(arr[i]);
      break;
    }
  }
}

find(numbers, function(num){ 
  return num % 2 == 0; //should return 2
})







