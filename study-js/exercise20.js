let x = 0;
let y = 0;
let radius = 100;
let draw = {
    color: "red",
    thickness: 7
};
let circle1 = {
    x: x, y: y, radius: radius, draw: {
        color: draw.color,
        thickness: draw.thickness
    }
};
console.log(circle1);
let circle2 = {x,y,radius, draw}
console.log(circle2);

