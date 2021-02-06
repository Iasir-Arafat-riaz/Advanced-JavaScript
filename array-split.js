//slice 
const number= [11,12,14,52,44,77,19,29,81,87]
const part= number.slice(2,6)
console.log(part)
console.log(number);

//splice

const splicePart= number.splice(3,4);
console.log(splicePart);
console.log(number);

//join

const together = number.join("+")
console.log(together);
