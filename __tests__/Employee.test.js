const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('Christy');

    expect(employee.name).toBe('Christy');
    expect(employee.name).toEqual(expect.any(String));
});