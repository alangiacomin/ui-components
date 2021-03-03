import hasRole from './hasRole';

describe('Utility: hasRole', () => {
  test('description', () => {
    const result = hasRole(null);
    expect(result).toBe(false);
  });
});
