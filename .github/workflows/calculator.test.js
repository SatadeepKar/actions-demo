const {add, subtract } = require('./calculator');

test('2 + 3 should equal to 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('10 - 4 should equal to 6', () => {
    expect(subtract(10, 4)).toBe(6);
});