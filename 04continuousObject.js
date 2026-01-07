const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
console.log(myObj.cars[0].models);
// cart object
const placedOrder = {
  products: [
    { pId: 1, pName: "Laptop", price: 50000, quantity: 1 },
    { pId: 2, pName: "Mouse", price: 500, quantity: 2 },
  ],
  shippingAddress: {
    street: "vignan college",
    city: "vadlamudi",
    state: "AP",
    pincode: "522213",
  },
  userinfo: {
    name: "balaji",
    mobile: "7569865757",
  },
};
console.log(placedOrder.userinfo.name); // balaji
