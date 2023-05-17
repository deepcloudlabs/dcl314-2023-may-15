class Employee {
    constructor({identity, fullname, salary, iban}) {
        this.identity = identity;
        this.fullname = fullname;
        this.salary = salary;
        this.iban = iban;
    }

    sayHello() {
        console.log(`Hello, ${this.fullname}!`);
    }
}

let jack = new Employee({
    salary: 100_000,
    identity: "11111111110",
    fullname: "jack bauer",
    iban: "tr1"
});
let {identity, fullname, salary, iban} = jack;
const jackAsJson = JSON.stringify(jack);
console.log(jack);
jack.sayHello();
console.log(jackAsJson);
console.log(typeof (jackAsJson))
const parsedJack = new Employee(JSON.parse(jackAsJson));
console.log(parsedJack);
parsedJack.sayHello();

function fun(){
    return 42;
}
async function gun(){
    return 42;
}

async function sun(){
    return await fun();
}

sun().then(result => console.log(`Result is ${result}`))