const UU_JWT = 'UU_JWT';
export default class AuthStorage {
  static async POST(data: any) {
    localStorage.setItem(UU_JWT, JSON.stringify(data.accessToken));
  }

  static getTocken() {
    console.log('%c getTocken:', 'color:yellow');
    const uu_id = localStorage.getItem(UU_JWT);
    const JWT = uu_id ? JSON.parse(uu_id) : null;

    return this.isValid(JWT) ? JWT : null;
  }

  static isValid(_jwt: any) {
    // return _jwt ? _jwt.expire.valueInMillis > Date.now() : false;
    return true;
  }

  static getUser() {}

  static getJwtUser() {
    const jwt = this.getTocken();
    console.log('%c jwt:', 'color:yellow', jwt);
    return jwt ? this.parseJwtSub(jwt.token) : null;
  }

  static parseJwtSub(token: any) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      console.log('%c tocket payload:', 'color:yellow', payload);
      return JSON.parse(payload.sub);
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  static DELETE() {
    localStorage.removeItem(UU_JWT);
  }
}
