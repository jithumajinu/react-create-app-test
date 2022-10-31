import { JsonConvert, OperationMode, ValueCheckingMode } from 'json2typescript';
import { Authentication } from '../domain/Authentication';
import { ApiConfig } from './ApiConfig';
import { RestService } from './RestService';

const tough = require('tough-cookie');

export interface RequestParams {
  /**
   * The name of API to be display on the error message
   */
  apiName: string;
  path: string;
  qs?: Record<string, any>;
  headers?: Record<string, any>;
  body?: any;
  useRequestBody?: boolean;
  classRef?: any;
  skipRequestBodyParsing?: boolean;
  authentication?: Authentication;
  // pageRequest?: PageRequest;
}

export class ApiService {
  private _restService: RestService;
  private _jsonConvert: JsonConvert;

  constructor() {
    this._restService = new RestService();
    this._jsonConvert = new JsonConvert(OperationMode.ENABLE, ValueCheckingMode.ALLOW_OBJECT_NULL);
  }

  // async authenticate(authentication: Authentication) {
  //   if (authentication.token) {
  //     if (!authentication.csrfToken) {
  //       const auth: Record<string, any> = await this.authentication(
  //         authentication.token,
  //         authentication.selectedCompanyContractId
  //       );
  //       const updatedAuth = authentication;
  //       if (auth.csrfToken) {
  //         updatedAuth.csrfToken = auth.csrfToken;
  //       }
  //       if (auth.cloudSession) {
  //         updatedAuth.cloudSession = auth.cloudSession;
  //       }
  //       return updatedAuth;
  //     }
  //   }
  //   return authentication;
  // }

  async get<T>(params: RequestParams): Promise<T> {
    // const auth: Authentication = params.authentication;
    // const response = await this.restRequestService.getRequest(params.apiName, params.qs);
    const path = ApiConfig.serverEndpoint() + params.path;

    const response = await this.restService.get(
      ApiConfig.serverEndpoint() + params.path,
      {},
      {}
    );

   // const response = { body: 'test data' }; //  hide thuis part
    const body = response.body ? JSON.parse(response.body) : undefined;
    const data = body?.data;
    if (params.classRef && data) {
      if (Array.isArray(params.classRef))
        return this.jsonConvert.deserialize<any>(data, params.classRef[0]) as T;
      return this.jsonConvert.deserializeObject<T>(data, params.classRef);
    }
    return data;
  }

  get restService(): RestService {
    return this._restService;
  }

  set restService(value: RestService) {
    this._restService = value;
  }

  get jsonConvert(): JsonConvert {
    return this._jsonConvert;
  }

  set jsonConvert(value: JsonConvert) {
    this._jsonConvert = value;
  }
}
