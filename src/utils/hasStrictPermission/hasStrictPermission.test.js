import hasStrictPermission from './hasStrictPermission';

describe('Utility: hasStrictPermission', () => {
  test('description', () => {
    const result = hasStrictPermission(null);
    expect(result).toBe(true);
  });
});
