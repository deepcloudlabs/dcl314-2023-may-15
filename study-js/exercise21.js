let circle1 = {
    x: 10,
    y: 20,
    radius: 1,
    draw: {
        color: "red",
        thickness: 3
    }
}
/*
let x = circle1.x;
let y = circle1.y;*/
let {x, y,...rest} = circle1;
console.log(x,y);
console.log(rest);