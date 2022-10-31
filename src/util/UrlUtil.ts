import _qs from 'qs';
//const _qs = require('qs');

export class UrlUtil {
  static queryString(qs?: Record<string, any> | undefined | null): string {
    return _qs.stringify(qs);
  }

  static createPath(path: string, qs?: Record<string, any> | undefined | null) {
    let queryString = UrlUtil.queryString(qs);
    return path + (queryString.length > 0 ? '?' + queryString : '');
  }
}
