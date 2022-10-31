// import config from 'config';
// const endpoint: any = config.get('endpoint');
// const cookie = config.get('cookie');

export class ApiConfig {
  // static ENV_PROD = '';
  // static ENV_STG = 'stg';
  // static ENV_TEST = 'test';
  // static ENV_LOCAL = 'local';

  // static isCI() {
  //   //return true;
  //   return process && process.env && process.env.CI;
  // }

  // static getDomain() {
  //   if (typeof window !== 'undefined' && window.location && window.location.hostname) {
  //     return window.location.hostname.toLowerCase();
  //   }
  //   return undefined;
  // }

  // static getEnvironment() {
  //   let domain = ApiConfig.getDomain();
  //   if (domain === undefined || domain.includes('.local.') || domain.includes('10.0.2.2')) {
  //     return ApiConfig.ENV_LOCAL;
  //   } else if (domain.includes('.test.')) {
  //     return ApiConfig.ENV_TEST;
  //   } else if (domain.includes('.stg.')) {
  //     return ApiConfig.ENV_STG;
  //   } else {
  //     return ApiConfig.ENV_PROD;
  //   }
  // }

  // static getAuthenticationCookieName() {
  //   if (ApiConfig.isCI()) {
  //     return 'testatkn';
  //   }
  //   // return cookie.auth;
  //   // let env = ApiConfig.getEnvironment();
  //   // if (env === ApiConfig.ENV_PROD) {
  //   //   return 'atkn';
  //   // } else if (env === ApiConfig.ENV_STG) {
  //   //   return 'stgatkn';
  //   // } else if (env === ApiConfig.ENV_TEST) {
  //   //   return 'testatkn';
  //   // }
  //   // return 'localatkn';
  // }

  static serverEndpoint() {
    //if (ApiConfig.isCI()) {
    if (true) {
      return 'http://localhost:3000';
    }

    return 'http://localhost:3000';
    // return endpoint.cloudApi;
  }
}
