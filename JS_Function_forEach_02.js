/*  Qs. For a given array of numbers, print the square of each value using the forEach loop. */
let array=[10,20,30,40,50];

let printSquare =(val) =>{
     console.log(`Square of ${val}=${val*val}`);
};
array.forEach(printSquare);