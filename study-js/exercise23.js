class Employee{
    #identity;
    #fullname;
    #salary;
    #iban;
    constructor(identity,fullname,salary,iban) {
        this.#identity = identity;
        this.#fullname = fullname;
        this.#salary = salary;
        this.#iban = iban;
        /*this.sayHello = this.sayHello.bind(this);
        this.increaseSalary = this.increaseSalary.bind(this);*/
    }
    get identity() {
       return this.#identity;
    }
    get fullname() {
        console.log(`Employee::get fullname()`)
        return this.#fullname;
    }
    set fullname(value) {
        if (value.length < 5)
            throw "fullname cannot be smaller than 5-chars";
        console.log(`Employee::set fullname(${value})`)
       this.#fullname = value;
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
jack.fullname = "jack";
console.log(jack.fullname)