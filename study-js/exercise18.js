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
const kate = {...jack};
kate.increaseSalary(100);
console.log(jack.salary);
console.log(kate.salary);