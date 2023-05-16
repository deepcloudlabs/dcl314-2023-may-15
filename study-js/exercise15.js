function* filter(array, predicate) {
    for (let element of array) {
        console.log(`filter is iterating over array: ${element}`);
        if (predicate(element))
            yield element;
    }
}

function reduce(array, reducer, initial) {
    let accumulator = initial;
    for (let element of array) {
        console.log(`reducer is iterating over array: ${element}`);
        accumulator = reducer(accumulator, element);
    }
    return accumulator;
}
function* map(array, mapper) {
    for (let element of array) {
        console.log(`map is iterating over array: ${element}`);
        yield mapper(element);
    }
}

let numbers = [4, 8, 15, 16, 23, 42];

for (let number of map(
             filter(numbers, n => n%2 === 0),
    u => u**3))
    console.log(`Inside the main loop: ${number}`);

const even = n => n%2 === 0;
const toCube = u => u**3;
const add = (a,e) => a+e;
let sum = reduce(map(filter(numbers,even),toCube),add,0);
console.log(sum)