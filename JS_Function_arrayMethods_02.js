/*  Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.
*/
let size= prompt("Enter Size for Creating an array = ");
let array=[];
for(let i=0;i<size;i++){
    array[i]=i+1;
}
let sum = array.reduce((res,crr)=>{
    return res + crr;
});
console.log(`Sum = ${sum}`);
let product = array.reduce((res,crr)=>{
    return res * crr;
});
console.log(`product = ${product}`);