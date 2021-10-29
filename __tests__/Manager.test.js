const Manager = require('../lib/Manager.js');

test('creates manager object', () => {
    const manager = new Manager('Christy');

    expect(manager.name).toBe('Christy');
    expect(manager.name).toEqual(expect.any(String));
});