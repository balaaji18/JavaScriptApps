// this key word
const emplotInfo = {
    firstName : "Kuda",
    lastName : "Balaji",
    empDetails : function() {
        return this.firstName + " " + this.lastName;

    }
};
console.log(emplotInfo.empDetails());