function buttonResult() {
    alert("HI");
}
let btnvalue = document.getElementById("demo");
btnvalue.addEventListener("cilck here",buttonResult);
// click login with arroe function
const buttonResult1 = () =>{
    alert("hello");
}
let buttonResult1 = document.getElementById("info");
buttonResult1.addEventListener("tap me", buttonResult1);
// mouse over mouseout logiic
let h2value = document.getElementById("sample");
const mouseoverlogic = () =>{
    h2value.style.color = "blue";
}
