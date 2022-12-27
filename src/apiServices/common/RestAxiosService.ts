import { UrlUtil } from '../../util/UrlUtil';
import _ from 'lodash';
const axios = require('axios');

export interface IHeader {
  Accept?: string;
  'Accept-Language'?: string;
  'Content-Type'?: string;
  Authorization?: string;
  'X-CSRF-TOKEN'?: string;
  Host?: string;
}

export class RestAxiosService {
  createHeaders() {
    let headers: IHeader = {
      Accept: '*/*',
      'Content-Type': 'application/json; charset=utf-8',
    };
    return headers;
  }

  async getRequest(
    baseURL: string,
    path: string,
    qs: Record<string, any> = {},
    headers: Record<string, any> = {}
  ) {
    let data = null;
    let loaded = false;
    let errorLevel = null;
    let errorMessage = '';
    const _headers = _.merge(this.createHeaders(), headers);
    const config = {
      baseURL: baseURL,
      headers: _headers,
      withCredentials: false,
    };

    const requestUrl = baseURL + UrlUtil.createPath(path, qs);
    console.log('%c:', 'color:yellow', requestUrl);

    await axios
      .get(requestUrl, config)
      .then((response: any) => (data = response.data))
      .catch((err: any) => {
        errorMessage = err.response.data || err.message;
        if (400 <= err.response.status && err.response.status < 499) {
          errorLevel = 'WARN';
        }
        if (500 <= err.response.status && err.response.status < 599) {
          errorLevel = 'ERROR';
        }
      })

      .finally(() => (loaded = true));
      console.log('%c  data-data:', 'color:yellow' ,data)
    return { data, errorLevel, errorMessage, loaded };
  }

  async postRequest(baseURL: string, path: string, body: any, headers: Record<string, any> = {}) {
    let data = null;
    let loaded = false;
    let errorLevel = null;
    let errorMessage = '';
    const requestUrl = baseURL + path;
    const _headers = _.merge(this.createHeaders(), headers);
    const config = {
      baseURL: baseURL,
      headers: _headers,
    };
    await axios
      .post(requestUrl, JSON.stringify(body), config)
      .then((response: any) => (data = response.data))
      .catch((err: any) => {
        errorMessage = err.response.data || err.message;
        if (400 <= err.response.status && err.response.status < 499) {
          errorLevel = 'WARN';
        }
        if (500 <= err.response.status && err.response.status < 599) {
          errorLevel = 'ERROR';
        }
      })
      .finally(() => (loaded = true));
    return { data, errorLevel, errorMessage, loaded };
  }
}

// import { ApiConfig } from './ApiConfig';
// import { UrlUtil } from '../../util/UrlUtil';

// const axios = require('axios');

// export interface IHeader {
//   Accept?: string;
//   'Accept-Language'?: string;
//   'Content-Type'?: string;
//   Authorization?: string;
//   'X-CSRF-TOKEN'?: string;
//   Host?: string;
// }

// export class RestService {
//   createHeaders(qs?: Record<string, any>) {
//     let headers: IHeader = {
//       Accept: '*/*',
//       'Accept-Language': qs && qs.lang ? qs.lang : 'ja',
//       'Content-Type': 'application/json',
//     };
//     return headers;
//   }

//   get(
//     path: string,
//     qs: Record<string, any> = {},
//     headers: Record<string, any> = {},
//     useRequestBody = false
//   ) {
//     let _headers = Object.assign(this.createHeaders(qs), headers);
//     let config = {
//       baseURL: ApiConfig.serverEndpoint(),
//       headers: _headers,
//       withCredentials: false,
//     };
//     console.log(config);
//     try {
//       return axios.get(UrlUtil.createPath(path, qs), config);
//     } catch (e) {
//       console.error('Error! HTTP Status', e);
//     }
//   }

//   post(path: string, data: any, headers: Record<string, any> = {}) {
//     let _headers = Object.assign(this.createHeaders(), headers);
//     // if (ApiConfig.getCsrfToken()) {
//     //   headers['X-CSRF-TOKEN'] = ApiConfig.getCsrfToken();
//     // }

//     let config = {
//       baseURL: ApiConfig.serverEndpoint(),
//       headers: _headers,
//     };
//     console.log('post! serverEndpoint', ApiConfig.serverEndpoint());
//     console.log('post! path', path);
//     console.log('post! config', config);
//     try {
//       return axios.post(path, data, config);
//     } catch (e) {
//       console.error('Error! HTTP Status', e);
//     }
//   }

//   delete(
//     path: string,
//     qs: Record<string, any> = {},
//     headers: Record<string, any> = {},
//     useRequestBody = false
//   ) {
//     let _headers = Object.assign(this.createHeaders(qs), headers);
//     let config = {
//       baseURL: ApiConfig.serverEndpoint(),
//       headers: _headers,
//       withCredentials: false,
//     };
//     console.log(config);
//     try {
//       return axios.delete(UrlUtil.createPath(path, qs), config);
//     } catch (e) {
//       console.error('Error! HTTP Status', e);
//     }
//   }
// }
