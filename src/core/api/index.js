import axios from 'axios';
import { URL_API } from '../constant/api';

const configApi = {
  baseURL: URL_API,
  headers: { 'Access-Control-Allow-Origin': '*' },
};

// if (URL_DEBUG) {
//   configApi.headers['X-Vize-Url'] = URL_DEBUG
// }

export const api = axios.create(configApi);
