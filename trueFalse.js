//falsy: false, 0, "", undefined, null, NaN

//truthy: "0", " ", []

const number = 0

if (number){
    console.log("this condition is true")
}
else{
    console.log("this condition is false")
}


if("false"){
    console.log("i am not false")
}
else{
    console.log("false")
}