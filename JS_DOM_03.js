/*  Qs. Create a new button element. Give it a text “click me”

, background color of red & text color

of white.

Insert the button as the first element inside the body tag. */
let butt=document.createElement("button");
butt.innerText="Click me";
butt.style.backgroundColor="red";
butt.style.color="white";
document.querySelector("body").prepend(butt);
