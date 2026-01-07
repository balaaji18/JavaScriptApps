// withoutclosure
let counter = 1;
const counterResult = () => {
    let counter = 0
    counter += 1;
    return counter;
}
// local scope
console.log(counterResult());
console.log(counterResult());
console.log(counterResult());