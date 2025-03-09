/*  Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode
when clicked again.  */
let btt=document.createElement("button");
btt.innerText="Dark";
let body=document.querySelector("body");
body.prepend(btt);
const changeColor=(e)=>{
    if(btt.innerText==="Dark"){
        btt.innerText="Light";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else if(btt.innerText==="Light"){
        btt.innerText="Dark";
        body.classList.add("light");
        body.classList.remove("dark");
    }
}
btt.addEventListener("click",changeColor);
