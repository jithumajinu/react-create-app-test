import { ApiService } from './ApiService';
// import { FaxType } from '../domain/FaxType';
import { Authentication } from '../domain/Authentication';

export class LoginService extends ApiService {
  async findAll() {
    return 'test';
  }

  async findAllItems(authentication: Authentication) {
    return this.get<any[]>({
      apiName: 'user-all',
    //   path: '/user/all',
      path: 'https://datausa.io/api/data?drilldowns=Nation&measures=Population',
      //   qs: { valideuser, validLicence },
      authentication,
    });
  }
}
