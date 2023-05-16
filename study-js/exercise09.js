function fun(x=1, y=2, z=3) {
/*    x = x || 1;
    y = y || 2;
    z = z || 3;*/
    return x * y + z;
}
console.log(fun())
console.log(fun(10))
console.log(fun(10,20))
console.log(fun(10,20,30))
console.log(fun(10,20,30,40,50))