import { LoginService } from './auth/service/LoginService';

let instance: RestApiService;

export class RestApiService {
  private _loginService?: LoginService;
  //Continue
  //private _xyzService?: XyzService;

  static getInstance() {
    if (!instance) {
      instance = new RestApiService();
    }
    return instance;
  }

  constructor() {
    this.loginService = new LoginService();

    //Continue
    // this.xyzService = new XyzService();
  }

  get loginService(): LoginService {
    return this._loginService || new LoginService();
  }

  set loginService(value: LoginService) {
    this._loginService = value;
  }

  //Continue getter and setter
  /*
  get xyzService(): XyzService {
    return this._xyzService || new XyzService();
  }

  set loginService(value: XyzService) {
    this._xyzService = value;
  }
  */
}
