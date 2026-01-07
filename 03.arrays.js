// demo arrays in js 
//stored in dissimilar
const demoArray = [101,"balaji",20];// literal syntax
console.log(demoArray);
const p_Name = ["realme","samsung","vivo","oppo"];
console.log(p_Name);
// another style of syntac
let p_Prices = new Array(25000,50000,20000,15000);//object syntax
//to get values
console.log(p_Prices[2]);
//for each method
let products = p_Name.forEach((val) =>{
    console.log(val);
})
let price = p_Prices.forEach((inr) =>
{
    console.log(inr);
})
// to add elements in to array: we can use push, unshift,splice
p_Name.push("one plus");
console.log(p_Name);
p_Name.unshift("poco");
console.log(p_Name);
p_Name.splice(2,0,"moto","apple");
console.log(p_Name);
// to remove we can use pop,shift methods
//pop method
p_Name.pop();
console.log(p_Name);// last val
// shift method
p_Name.shift();
console.log(p_Name);//first vel
// delete
// delete p_Name[1];
// console.log(p_Name);// not recomemnded

//sort method
console.log(p_Name.sort());//assending 
// reverse
console.log(p_Name.reverse());
// to update a value
p_Name [2] = ["pova1"];
console.log(p_Name);
// concat
let p_Name1 = ["redmi","hawai"];
console.log(p_Name.concat(p_Name1));// to merge
// spread operator
let productNames = [...p_Name,...p_Name1];
console.log(productNames);// another way to merge
//array advanced methods
let sum = p_Prices.reduce((tot,value) => {
    return tot + value;
})
console.log(sum);
//map
offerPrice = p_Prices.map((value) => {
    return value -2000;
})
console.log(offerPrice);//discounts