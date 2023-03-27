class Employee{
    constructor(name , position ,salary){
        this.name = name
        this.position = position
        this.salary = salary
    }

    getSalary(){
        return this.salary
    }
}
const employee = new Employee("Sukomal", "Full Stack Developer", 30000)

console.log(employee.getSalary())