/* Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
Find the average marks of the entire class. */
let students = [85, 97, 44, 37, 76, 60];
let sum =0;
for(let val of students){
    sum += val;
}
let avg= sum / students.length;
console.log(`Average of array is ${avg}`);