const axios = require('axios');

export async function getCurrentUser(): Promise<any> {
  const response = await axios.get('/api/user');

  return response.data.data;
}

export async function signUp(params: {
  email: string;
  name: string;
  password: string;
}): Promise<any> {
  const response = await axios.post('/api/user', { user: params });

  return response.data.data;
}
