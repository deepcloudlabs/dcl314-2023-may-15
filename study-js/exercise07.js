let employees = [
    {"fullname": "jack bauer", "salary": 300_000, "department": "IT"},
    {"fullname": "kate austen", "salary": 50_000, "department": "SALES"},
    {"fullname": "james sawyer", "salary": 100_000, "department": "HR"},
    {"fullname": "ben linus", "salary": 150_000, "department": "IT"},
    {"fullname": "sun kwon", "salary": 250_000, "department": "SALES"},
    {"fullname": "jin kwon", "salary": 350_000, "department": "HR"}
];
Array.prototype.groupBy = function (keyExtractor, valueExtractor, reducer, initial) {
    const map = new Map();
    this.forEach((item) => {
        const key = keyExtractor(item);
        let value = map.get(key);
        if (!value) {
            map.set(key, initial);
            value = initial;
        }
        map.set(key, reducer(value, valueExtractor(item)));
    });
    return map;
};
const salaryMinMaxReducer = (s, salary) => {
    return {minSalary: Math.min(s.minSalary, salary), maxSalary: Math.max(s.maxSalary, salary)};
};
const initialMinMaxSalary = {minSalary: Number.MAX_VALUE, maxSalary: Number.MIN_VALUE};
const departmentExtractor = employee => employee.department;
const salaryExtractor = employee => employee.salary;

const departmentMinMaxSalaries = employees.groupBy(departmentExtractor, salaryExtractor, salaryMinMaxReducer, initialMinMaxSalary);

console.log(departmentMinMaxSalaries)
