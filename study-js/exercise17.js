class Employee{
    constructor(identity,fullname,salary,iban) {
        this.identity = identity;
        this.fullname = fullname;
        this.salary = salary;
        this.iban = iban;
        /*this.sayHello = this.sayHello.bind(this);
        this.increaseSalary = this.increaseSalary.bind(this);*/
    }
    increaseSalary = (rate) => {
        this.salary *= 1.0 + rate/100;
    }

    sayHello = () => {
        console.log(this)
        console.log(`Hello, ${this.fullname}!`);
    }
}

const jack = new Employee("1","jack bauer", 100_000, "tr1");
console.log(jack)
jack.increaseSalary(100)
jack.salary = 500_000
jack.sayHello() // sayHello(jack)
setTimeout(jack.sayHello, 3_000);