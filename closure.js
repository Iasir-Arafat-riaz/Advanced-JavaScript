function stopwatch(){
    let counting =0;
    return function(){
        counting++;
        return counting;


    }
}

const clock1 = stopwatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopwatch();
console.log(clock2());
console.log(clock2());