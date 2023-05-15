numbers = [42, 8, 4, 16, 15, 23];
console.log(numbers)
// HoF -> Pure Function -> Lambda Expression/Arrow Function
function numericOrderAsc(x, y) {
    return Math.floor(x-y) ;
};
function numericOrderDesc(x, y) {
    return Math.floor(y-x);
};
numbers.sort(numericOrderAsc)
console.log(numbers)
numbers.sort((x, y) => x-y)
console.log(numbers)
