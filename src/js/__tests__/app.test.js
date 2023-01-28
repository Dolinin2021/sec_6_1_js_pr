import orderByProps from '../app';

test('correct operation of the function', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const result = orderByProps(obj, ['name', 'level']);
  expect(result).toEqual(
    [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ],
  );
});

test('passing an empty array of keys', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const result = orderByProps(obj, []);
  expect(result).toEqual(
    [
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ],
  );
});

test('passing an empty object', () => {
  const obj = {};
  const result = orderByProps(obj, ['name', 'level']);
  expect(result).toEqual(
    [
      { key: 'name', value: undefined },
      { key: 'level', value: undefined },
    ],
  );
});

test('passing empty function arguments', () => {
  const obj = {};
  const result = orderByProps(obj, []);
  expect(result).toEqual([]);
});
