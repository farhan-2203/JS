/*  Qs. Create 3 divs with common class name - “box”

. Access them & add some unique text to each

of them. */
const boxes = document.querySelectorAll(".box");
console.log(boxes);
for(let idx =0;idx < boxes.length;idx++){
    boxes[idx].innerText=`Unique value :  ${idx}`;
}

