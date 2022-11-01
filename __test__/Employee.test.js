const Employee = require('../lib/Employee');

test ("create employee", () => {
    const employee = new Employee("Michelle", 18, "michelle.work@example.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test ("get employee name", () => {
    const employee = new Employee("Michelle", 18, "michelle.work@example.com");

    expect(employee.getName()).toEqual(expect.any(String));
});

test ("get employee id", () => {
    const employee = new Employee("Michelle", 18, "michelle.work@example.com");

    expect(employee.getID()).toEqual(expect.any(Number));
});