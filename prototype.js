function Student(name) {
    this.name = name; 
}

// Add the printDetails method to the Student prototype
Student.prototype.printDetails = function () {
    console.log(`Hello, my name is ${this.name}`);
};


const student = new Student("Mithun");

student.printDetails()