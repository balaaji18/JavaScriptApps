//functions in js
function showMessage() {
    console.log("Welcome to js functions");
}
showMessage();

// function with parameters
// function summun(a,b){
//     console.log("sum is:" + (a+b));
// }
// sumnum(10,20);

//function with return value
function mulnum(c,d){
    return c*d;
}
let result = mulnum(10,10);
console.log("product of :"+ result);

//new function syntax in ES-6
// arrow function 
const arrowDemo = () => {
    console.log("Arrow function demo");

}
arrowDemo();

//with parameters 
const addNum = (a,b) => {
  console.log("Addion of numbers" + (a+b));
};
arrowDemo(10,30);

// in a simple way
 const addNum1 = (a, b) => a+b;
 console.groupCollapsed(addNum(10,30));

 //function with return values
 const addNum2 = (a, b) => a * b;
 let res = mulnum(5,5);
 console.log("product is:" + res);