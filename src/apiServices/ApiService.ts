import { LoginService } from './auth/service/LoginService';
import { CustomerService } from './customer/service/CustomerService';

let instance: ApiService;

export class ApiService {
  private _loginService?: LoginService;
  private _customerService?: CustomerService;

  static getInstance() {
    if (!instance) {
      instance = new ApiService();
    }
    return instance;
  }

  constructor() {
    this.loginService = new LoginService();
    this.customerService = new CustomerService();
  }

  get loginService(): LoginService {
    return this._loginService || new LoginService();
  }

  set loginService(value: LoginService) {
    this._loginService = value;
  }

  get customerService(): CustomerService {
    return this._customerService || new CustomerService();
  }

  set customerService(value: CustomerService) {
    this._customerService = value;
  }
}
