import { ApiRestService } from '../../common/ApiRestService';
import { Authentication } from '../../common/Authentication';
export class LoginService extends ApiRestService {
  toHeaders() {
    let headers: Record<string, any> = {};
    headers['Authorization'] = ''; //AuthService.getAutherizaion();
    return headers;
  }

  async login(_usernameOrEmail: string, _password: string) {
    const _body = {
      usernameOrEmail: _usernameOrEmail,
      password: _password,
    };

    return this.post({
      baseURL: 'http://localhost:8070/api',
      path: '/auth/signin',
      body: _body,
      headers: this.toHeaders(),
    });
  }
}
