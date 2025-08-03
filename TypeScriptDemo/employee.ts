class Employee {
    private empName: string
    constructor(empName: string) {
        this.empName = empName;
    }

    getEmpName(): string {
        return this.empName;
    }
}
const emp = new Employee("Ramesh");
console.log(emp.getEmpName())