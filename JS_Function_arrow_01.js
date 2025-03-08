/* Qs. Create a function using the “function” keyword that takes a String as an argument &
returns the number of vowels in the string. */
function calcVowels(msg){
    let totalVowels=0;
    for(let val of msg){
        if(val=='a'||val=='e'||val=='i'||val=='o'||val=='u'){
            totalVowels++;
        }
    }
    return totalVowels;
}
console.log(calcVowels("Farhan Ahmad"));

/*  Qs. Create an arrow function to perform the same task. */
let T_V = (msg) =>{
    let totalVowels=0;
    for(let val of msg){
        if(val=='a'||val=='e'||val=='i'||val=='o'||val=='u'){
            totalVowels++;
        }
    }
    return totalVowels;
}