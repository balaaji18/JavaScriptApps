//objects in js
const movieInfo = {
    movie_Name : "remo",
    hero_Name : "karthik",
    dict_Name : "balaji"
} // how to get dict_Name
console.log(movieInfo.dict_Name);
console.log(movieInfo["hero_Name"]);// another way to access
console.log(movieInfo);
for(let info  in movieInfo){
    console.log(movieInfo[info]);
}
// ES-6 + new featurs 
// "Object.keys()" to get only properties
Object.keys(movieInfo).forEach((key) =>{
    console.log(key);
});
//tog only values
//Object.values()
Object.values(movieInfo).forEach((val) => {
    console.log(value);
}); //to get key and values
Object.entries(movieInfo).forEach((entr) => {
    console.log(entr[0]+" "+entr[1]);
});
// using forOf
for(let [info,infovalue] of Object.entries(movieInfo)) {
    console.log(info +" " +infovalue);
}
//nested object
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
console.log(myObj[1]);