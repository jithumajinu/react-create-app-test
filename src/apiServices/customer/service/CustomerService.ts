import AuthService from 'apiServices/demo/authservice';
import { ApiRestService } from '../../common/ApiRestService';
import { Authentication } from '../../common/Authentication';

export class CustomerService extends ApiRestService {
  toHeaders() {
    let headers: Record<string, any> = {};
    headers['Authorization'] = ''; //AuthService.getAutherizaion();
    return headers;
  }

  async findAll() {
    return 'test';
  }

  async findAllItems(_qs: any) {
    return this.get({
      baseURL: 'http://localhost:8070/api',
      path: '/laptop/all-laptop',
      //path: 'https://datausa.io/api/data?drilldowns=Nation&measures=Population',
      qs: _qs,
      headers: this.toHeaders(),
    });
  }
}
