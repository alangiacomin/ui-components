import hasPermission from './hasPermission';

describe('Utility: hasPermission', () => {
  test('description', () => {
    const result = hasPermission({});
    expect(result).toBe(true);
  });
});
