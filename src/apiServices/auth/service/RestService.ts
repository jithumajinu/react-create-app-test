import { ApiConfig } from './ApiConfig';
import { UrlUtil } from '../../../util/UrlUtil';

const axios = require('axios');

export interface IHeader {
  Accept?: string;
  'Accept-Language'?: string;
  'Content-Type'?: string;
  Authorization?: string;
  'X-CSRF-TOKEN'?: string;
  Host?: string;
}

export class RestService {
  createHeaders(qs?: Record<string, any>) {
    let headers: IHeader = {
      Accept: '*/*',
      'Accept-Language': qs && qs.lang ? qs.lang : 'ja',
      'Content-Type': 'application/json',
    };
    return headers;
  }

  get(
    path: string,
    qs: Record<string, any> = {},
    headers: Record<string, any> = {},
    useRequestBody = false
  ) {
    let _headers = Object.assign(this.createHeaders(qs), headers);
    let config = {
      baseURL: ApiConfig.serverEndpoint(),
      headers: _headers,
      withCredentials: false,
    };
    console.log(config);
    try {
      return axios.get(UrlUtil.createPath(path, qs), config);
    } catch (e) {
      console.error('Error! HTTP Status', e);
    }
  }

  post(path: string, data: any, headers: Record<string, any> = {}) {
    let _headers = Object.assign(this.createHeaders(), headers);
    // if (ApiConfig.getCsrfToken()) {
    //   headers['X-CSRF-TOKEN'] = ApiConfig.getCsrfToken();
    // }

    let config = {
      baseURL: ApiConfig.serverEndpoint(),
      headers: _headers,
    };
    console.log('post! serverEndpoint', ApiConfig.serverEndpoint());
    console.log('post! path', path);
    console.log('post! config', config);
    try {
      return axios.post(path, data, config);
    } catch (e) {
      console.error('Error! HTTP Status', e);
    }
  }

  delete(
    path: string,
    qs: Record<string, any> = {},
    headers: Record<string, any> = {},
    useRequestBody = false
  ) {
    let _headers = Object.assign(this.createHeaders(qs), headers);
    let config = {
      baseURL: ApiConfig.serverEndpoint(),
      headers: _headers,
      withCredentials: false,
    };
    console.log(config);
    try {
      return axios.delete(UrlUtil.createPath(path, qs), config);
    } catch (e) {
      console.error('Error! HTTP Status', e);
    }
  }
}
