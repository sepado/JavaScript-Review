var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function
//code here

function last(arr) {
	return arr[arr.length -1];
};

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];
//code here

function delOdds(arr) {
	for (var i = arr.length -1; i >0 ; i--) {
		if(!(arr[i] % 2) == 0) {
			arr.splice(i, 1);
		}
	}
}
delOdds(evenArray);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//below you're given a function that will return a random number between 0 and 30 
//and an array full or numbers 'randomArray'. Your job is to write a function that 
//will get a random number, then loop through the array to see if that random number 
//is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,1,2,3,4,5,6,7,8,9,10,11,19,20,21,22,23,24,25,26,29,30];
//code here
function findMe(arr) {
	var ranNum = getRandomArbitrary();
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] === ranNum) {
			return true;
			break;
		}
	}
	return false;
}
findMe(randomArray);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//Create a copy of first and save it into second. Then, add 6 and 7 to the end of 
//second. When you run this, first should be just [1,2,3,4,5] and second will be 
//[1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;
//code here

second = [];
function copyArr(arrSrc, arrDest, addNumToEnd) {
	for (var i = 0; i < arrSrc.length; i++) {
		arrDest.push(arrSrc[i]);
	}
	for (var j = 0; j < addNumToEnd; j++) {
		arrDest.push(arrDest.length +1); 
	}
}
copyArr(first, second, 2);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//write a function called longest that takes in our sentence variable, 
//and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"
//code here

function detLongWord(str) {
	var newArr = str.split(' ');
	var longLength = 0;
	var longIndexNum;
	for (var i = 0; i < newArr.length; i++) {
		if (newArr[i].length > longLength) {
			longLength = newArr[i].length;
			longIndexNum = i;
		}
	}
	return newArr[longIndexNum];
}

detLongWord(sentence);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//write a function called capitalize that takes in the myPoem 
//variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//code here

function capitalize(str) {
	var newArr = str.split(' ');
	for (var i = 0; i < newArr.length; i++) {
		newArr.splice(i, 1, newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1));
	}
	return newArr;
}

capitalize(myPoem);

//SEAN NOTES: break down this line of code
//newArr.splice(i, 1, newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1));
//newArr.splice(current position in array, number items to REPLACE, what to replace it with)
//newArr[i].charAt(0).toUpperCase() // array position, charAt(first position), toUpperCase method
//newArr[i].slice(1); // SLICE DELETES character 0. 


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns 
//how many vowels are in that string.

function vowelCounter(str) {
	var counter = 0;	
	for (var i = 0; i < str.length; i++)
		if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
			counter++;
		};
	return counter;
};

vowelCounter(theOdyssey);

//OR (array)

function vowelCounter(str) {
	var counter = 0;	
	for (var i = 0; i < str.length; i++)
		if (['a', 'e', 'i', 'o', 'u'].indexOf(str[i]) >= 0) {
			counter++;
		};
	return counter;
};

vowelCounter(theOdyssey);


//OR (doesn't work, why?)
//http://tjvantoll.com/2013/03/14/better-ways-of-comparing-a-javascript-string-to-multiple-values/

function vowelCounter(str) {
	var counter = 0;
	for (var i = 0; i < str.length; i++){	
		if (str[i].match(/^('a'|'e'|'i'|'o'|'u')$/)) {
			counter++;
			};
	}
	return counter;
};

vowelCounter(theOdyssey);




