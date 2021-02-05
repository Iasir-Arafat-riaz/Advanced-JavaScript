const student = [ 
    {id:9, name: "manna"},
    {id:13, name:"dipjol"},
    {id:29, name:"munmun"}

]

// const output= [{}]
// for (i=0; i<student.length; i++){
//     let element = student[{i}]
//     let result= output.push(element)
//     console.log(result);
// }
let preview = student.map(stnd=>stnd.name);
console.log(preview);

//using by filter

let selective = student.filter(s=> s.id>20);
console.log(selective);

// using by find
let finding = student.find(s=> s.id>10);
console.log(finding);