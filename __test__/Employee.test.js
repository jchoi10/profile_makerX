const Employee = require('../lib/Employee');

test ("create employee", () => {
    const employee = new Employee("Michelle", 18, 'michelle.work@example.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});