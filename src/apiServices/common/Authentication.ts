export class Authentication {
  token?: string;
  csrfToken: string = ''; //undefined; //_ctkn
  selectedCompanyContractId: string = ''; //undefined; //_scc
  selectedCompanyContractFax: string = ''; //undefined; //_scf
  cloudDomain: string = '.local.gowri.com';
  cloudSession?: string; //SESSION

  static test() {
    let authentication = new Authentication();
    authentication.token = 'JEST_TEST';
    return authentication;
  }

  toHeaders() {
    let headers: Record<string, any> = {};
    headers['Content-Type'] = 'application/json';
    if (this.token) {
      headers['Authorization'] = this.token;
    }
    if (this.csrfToken) {
      headers['X-CSRF-TOKEN'] = this.csrfToken;
    }
    headers['Accept-Language'] = 'ja-JP';
    return headers;
  }
}
