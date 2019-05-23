// Write a function that takes an array of integers as an argument.
// The function should return a single integer that represents the
// sum of any numbers in the  array that are followed by
// the same number. Here are some examples:


// [4, 3, 4, 4, 3, 5, 5]
// -> 9

// [4, 4, 4, 5]
// -> 8

// [5, 4, 3]
// -> 0

// 

var intArray = [4, 3, 4, 4, 3, 5, 5];

var newSumAdded = function(){
  var i;
 
  for (i = 0; i < intArray.length; i++ ) {       
    // logs the current item in the array
     intArray[i];
	if (intArray[i] === intArray[i+1] || intArray[i] === intArray[i-1]){
		
		var Ffinal= intArray[i] *2;
		
		console.log (Ffinal)

		}
	} 
}


newSumAdded()