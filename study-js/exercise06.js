let employees = [
    {"fullname": "jack bauer", "salary": 300_000, "department": "IT"},
    {"fullname": "kate austen", "salary": 50_000, "department": "SALES"},
    {"fullname": "james sawyer", "salary": 100_000, "department": "HR"},
    {"fullname": "ben linus", "salary": 150_000, "department": "IT"},
    {"fullname": "sun kwon", "salary": 250_000, "department": "SALES"},
    {"fullname": "jin kwon", "salary": 350_000, "department": "HR"}
];
let departmentSalaryStat = {};
for (let employee of employees){
    const department = employee.department;
    if(!departmentSalaryStat.hasOwnProperty(department)){
        departmentSalaryStat[department] = {
            minSalary: employee.salary,
            maxSalary: employee.salary
        }
    }
    if (employee.salary < departmentSalaryStat[department].minSalary )
        departmentSalaryStat[department].minSalary = employee.salary;
    if (employee.salary > departmentSalaryStat[department].maxSalary )
        departmentSalaryStat[department].maxSalary = employee.salary;
}
console.log(departmentSalaryStat)
