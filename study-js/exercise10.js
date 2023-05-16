function fun(x,y,z) {
    if(arguments.length !== 3)
        throw "you must provide exactly 3-parameters.";
    return x * y + z;
}
console.log(fun(1,2,3))
console.log(fun(10,2,3))
console.log(fun(10,20,3))
console.log(fun(10,20,30))
console.log(fun(10,20,30))