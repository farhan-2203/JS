/* Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+. */
let marks=[80,75,87,98,90,66,100];
let highestMarks = marks.filter((val)=>{
    return val > 90;
});
console.log(highestMarks);