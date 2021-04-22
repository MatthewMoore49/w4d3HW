
//3. Create an array that is multi-dimensional (it has arrays as its value).
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/nest-one-array-within-another-array

var myArray = [["Milk", 77], ["Toenail", 44]];

//4. Create a function that takes a multi-dimensional array as an argument and console.logs every value in that two dimensional array using for-loop inside a for-loop.
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/nesting-for-loops
function multiplyAll(arr) {
    let product = 1;
    
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }
   
    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);

//5. Create an array that is three-dimension. Each index of the array should contain an array. Each of those arrays should also have arrays inside them. Finally, the second level of arrays, should contain numbers or strings as their values.

//(example var myArray = [ [ [1,2] , [3 , 4 ] , [ [5 , 6] , [ 7 ,8] ] , [ 9,10 ] ] ]
var cakeArray = [
  
    ["blister", false, 1, 2, 3, "icing", "distorted"],
    ["75", "phlegm", 6, 7, 1000, "mucus"],
    ["flat", 64, 24,67,1455, "785", "phantom", ["goats"]],
    ["mutant", 1327.98, "servant", 10,20,30,40, "thickness", [["intestine"]]],
   
  ];
//6. Create a function that receives two numbers as arguments. The function should return whichever argument is the largest.
//Finally, console.log the function passing in two numbers as arguments.
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-operator
function testGreaterThan(val1, val2) {
    if (val1 > val2) { 
      return val1;
    }
  
    if (val2 > val1) { 
      return val2;
    }}
 console.log(testGreaterThan(10,25));

  
   
//7. Create a function that receives two values as arguments. The function should return one string if the two values are equal, and a different string if the two values are different. You may either test for equality in value or for equality in value /and/ type.

//Finaly console.log the function with two equal arguments, and then console.log the function with two arguments that are not equal.
function monkeyArmPits(arm1, pit1) {
    if (arm1 === pit1) { 
      return 'armpit-equal';
    }
  
    if (arm1 !== pit1) { 
      return 'unequal-armpits';
    }}
 console.log(monkeyArmPits(10,25));
 console.log(monkeyArmPits("moist","moist"));