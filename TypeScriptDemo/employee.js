var Employee = /** @class */ (function () {
    function Employee(empName) {
        this.empName = empName;
    }
    Employee.prototype.getEmpName = function () {
        return this.empName;
    };
    return Employee;
}());
var emp = new Employee("Ramesh");
console.log(emp.getEmpName());
