numbers = [4,8,15,16,23,42]
/*
numbers = []
numbers.push(4);
numbers.push(8);
numbers.push(15);
numbers.push(16);
numbers.push(23);
numbers.push(42);
*/
console.log(numbers[0])
console.log(numbers[5])
console.log(numbers.length)
// external for loop #1
for (let i=0;i<numbers.length;++i){
    const number = numbers[i];
    console.log(`numbers[${i}]: ${number}`)
}
// external for loop #2
for (let i in numbers){
    const number = numbers[i];
    console.log(`numbers[${i}]: ${number}`)
}
// external for loop #3
for (let number of numbers){
    console.log(`${number}`)
}
// internal for loop #4 => functional programming
// forEach: HoF
numbers.forEach(function(number,index,dizi){
    if (index === dizi.length-1)
        console.log("Processing the last element...")
    console.log(`numbers[${index}]: ${number}`)
})
