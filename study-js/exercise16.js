function Employee(identity,fullname,salary,iban){
    this.identity = identity;
    this.fullname = fullname;
    this.salary = salary;
    this.iban = iban;

    this.increaseSalary = function(rate){
        this.salary *= 1.0 + rate/100;
    }
}

const jack = new Employee("1","jack bauer", 100_000, "tr1");
console.log(jack)
jack.increaseSalary(100)
jack.salary = 500_000
console.log(jack)