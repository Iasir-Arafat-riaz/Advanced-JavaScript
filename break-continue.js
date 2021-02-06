//break
const num = [1,2,4,5,7,11,13,16,18,19,21,24]
for(let i=0; i<num.length;i++){
    
    if(num[i]>16){
        break
    }
    console.log(num[i]);
}

//continue
const number = [1,-2,4,5,-7,11,-13,16,-18,19,-21,24]
for(let i=0;i<num.length;i++){
    if(number[i]<0){
        continue
        
    }
    console.log(number[i]);
}
