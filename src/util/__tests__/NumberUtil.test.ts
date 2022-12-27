import NumberUtil from '../NumberUtil';

describe('NumberUtil', () => {
  describe('round', () => {
    test('round', () => {
      expect(NumberUtil.round(0.005544466622310933)).toBe(0.0055);
      expect(NumberUtil.round(0.005544466622310933, 8)).toBe(0.00554447);
    });
  });
  describe('parse', () => {
    test('parse', () => {
      expect(NumberUtil.parse(undefined)).toBe(undefined);
      expect(NumberUtil.round(1)).toBe(1);
    });
  });
  describe('humanCount', () => {
    test('humanCount', () => {
      expect(NumberUtil.humanCount(1)).toBe('1');
      expect(NumberUtil.humanCount(1345)).toBe('1.3K');
    });
  });

  describe('test-x', () => {
    test('testxyz', () => {
      let x = true;
      expect(x).toEqual(true);
    });
  });
});
