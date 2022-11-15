import _ from 'lodash';
import axios from 'axios';
//import { env } from '../shared/ConfigEnv';
//import { notifyMessage } from '../component/templates/toast';
const LOCAL_STORAGE_ITEM = 'GMN_JWT';
const LOGIN_URL = ''; //`${env.GMN_API_BASE_URL}/users/login`;
export default class AuthService {
  // properties //
  static getJwt() {
    const item = localStorage.getItem(LOCAL_STORAGE_ITEM);
    const jwt = item ? JSON.parse(item) : null;
    return this.check(jwt) ? jwt : null;
  }
  /** Parses the subject from the token */
  static getJwtUser() {
    const jwt = this.getJwt();
    return jwt ? this.parseJwtSub(jwt.token) : null;
  }
  static getFullName() {
    const user = this.getJwtUser();
    return user ? `${user.firstName} ${user.lastName}` : null;
  }
  static getUserName() {
    const user = this.getJwtUser();
    return user ? user.name : null;
  }
  static getUserEmail() {
    const user = this.getJwtUser();
    return user ? user.email : null;
  }
  static getUserClaims() {
    const user = this.getJwtUser();
    return user ? this.mapClaims(user.claims) : [];
  }
  static getAuthHeader() {
    const jwt = this.getJwt();
    return jwt ? { Authorization: 'Bearer ' + jwt.token } : {};
  }
  static isValid() {
    return this.check(this.getJwt());
  }
  // methods //
  /**
   * Checks whether the JWT is expired
   *
   * @param {*} jwt
   */
  static check(jwt: any) {
    return jwt ? jwt.expire.valueInMillis > Date.now() : false;
  }
  /**
   *
   * @param {*} credentials : { username: '', password: '' }
   */
  static login(credentials: any) {
    return this.ajax(credentials);
  }
  /**
   * The only way to logout with a basic authentication is to fail to login.
   */
  static logout() {
    const username = this.getUserName() || 'logout';
    return this.ajax({ username, password: 'logout' }); // NOSONAR
    // 9000/api/users/login => return Status Code: 401 Unauthorized
  }
  static ajax(credentials: any) {
    const restUrl = LOGIN_URL;
    const restOpt = {
      headers: {
        Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password),
      },
    };
    
    // return axios
    //   .get(restUrl, restOpt)
    //   .then(this.onLogin200, this.onLogin4xx)
    //   .catch(this.onLogin5xx);
  }
  static parseJwtSub(token: any) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return JSON.parse(payload.sub);
    } catch (e) {
      console.error(e);
    }
    return null;
  }
  /**
   *
   * @param {*} role "role1|role2|..."
   * @param {*} area eg: screen - optional
   */
  static hasRole(role: string, area?: string) {
    const user = this.getJwtUser();
    if (user && user.claims.length > 0) {
      const pattern = _.isEmpty(area) ? `^(?:${role}|all)/` : `^(?:${role}|all)/(?:${area}|all)$`;
      const regex = new RegExp(pattern, 'i');
      return _.some(user.claims, claim => regex.test(claim));
    }
    return false;
  }
  /**
   * Maps the claims to a JSONArray of JSONObject as like { role, area }
   *
   * @param {*} claims
   */
  static mapClaims(claims: any) {
    return _.map(claims, function (claim) {
      const r = claim.split('/');
      return { role: _.startCase(r[0]), area: _.upperCase(r[1]) };
    });
  }
  // events //
  /** on-login ok */
  /** on-login ok */
  static onLogin200(response: any) {
    localStorage.setItem(LOCAL_STORAGE_ITEM, '');
  }
}
