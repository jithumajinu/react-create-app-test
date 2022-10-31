import { UrlUtil } from '../UrlUtil';

describe('UrlUtil', () => {
  describe('queryString', () => {
    it('empty', async () => {
      expect(UrlUtil.queryString()).toBe('');
      expect(UrlUtil.queryString(null)).toBe('');
      expect(UrlUtil.queryString(undefined)).toBe('');
    });
    it('null value', async () => {
      expect(UrlUtil.queryString({ name: null })).toBe('name=');
    });
  });
});
