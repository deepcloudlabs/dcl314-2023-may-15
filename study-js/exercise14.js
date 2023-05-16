let numbers = [4, 8, 15, 16, 23, 42];
let sum = 0;
const even = n => n % 2 === 0;
const toCube = x => x ** 3;
const accumulate = (s, u) => s + u;
sum = numbers.filter(even)           // 4 , 8  , 16  , 42
             .map(toCube)           // 64, 512, 4096, 74088
             .reduce(accumulate, 0) // 64 -> 576 -> 4672 -> 78760
console.log(`sum is ${sum}.`);
