const Manager = require("../lib/Manager");

test ("create Manger", () => {
    const manager = new Manager("Michael", 34, 'mikec@example.com', 2);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("get role employee", () => {
    const manager = new Manager("Michael", 34, 'mikec@example.com', 2);

    expect(manager.getRole()).toEqual("Manager");
});