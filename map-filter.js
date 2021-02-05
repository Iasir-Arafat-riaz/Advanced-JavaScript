// const number =[2,3,4,5,6,7,7,8,9]

// for(i=0; i<number.length; i++){
//     let element= number[i];
//     let result = element*element;
//     console.log(result)
// }

const number =[2,3,4,5,6,7,7,8,9]
// const output = []

// for(i=0; i<number.length; i++){
//     let element= number[i];
//     let result = element*element;
//     output.push(result);
// }
// console.log(output);

// const square = x=> x*x;
// const final = square(5);
// console.log(final)



const result = number.map(x=>x*x);
console.log(result);



//filter: array er modde kichu condition chaile or kichu valu filtering korte chaile
const numbers = [ 2,3,4,6,7,9,8,22]
const biggerNo= numbers.filter(x=> x>10);
console.log(biggerNo);

// find same filter er motoi kintu 1st valu tai output dibe jodi condition fillup hoy

const isThere= numbers.find(x=> x>5);
console.log(isThere);


