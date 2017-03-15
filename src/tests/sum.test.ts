import MathMachine from '../sum';

let mathMachine = new MathMachine;

test('adds 1 + 2 to equal 3', () => {
  expect(mathMachine.sum(1,2)).toBe(3);
});
