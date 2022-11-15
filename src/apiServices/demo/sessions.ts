//import redaxios from "redaxios";
const axios = require('axios');

export async function login(params: { email: string; password: string }): Promise<any> {
  const response = await axios.post('/api/sessions', { session: params });

  return response.data.data;
}

export async function logout(): Promise<unknown> {
  const response = await axios.delete('/api/sessions');

  return response.data.data;
}
