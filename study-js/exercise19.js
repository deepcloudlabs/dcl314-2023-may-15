let circle1 = {
    x:0,
    y:0,
    radius: 1,
    draw: {
        color: "red",
        thickness: 3
    }
}
let circle2 = {...circle1};
circle2.draw = {...circle1.draw};
console.log(circle1.draw.color)
console.log(circle2.draw.color)
circle2.draw.color = "blue";
console.log(circle1.draw.color)
console.log(circle2.draw.color)
