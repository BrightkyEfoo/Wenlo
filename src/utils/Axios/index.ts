import axios, { Axios, AxiosStatic } from 'axios';
import { apiUri } from '../api';
import {
  LoaderEmitter,
  LoaderEmitterEventsNames,
} from '../../components/Loader';

class ApiService {
  #instance: AxiosStatic;

  #token = '';

  constructor() {
    axios.interceptors.request.use(config => {
      LoaderEmitter.emit(LoaderEmitterEventsNames.START_LOADING, null);
      config.baseURL = apiUri;
      return config;
    });

    axios.interceptors.response.use(
      response => {
        LoaderEmitter.emit(LoaderEmitterEventsNames.STOP_LOADING, null);
        return response;
      },
      error => {
        LoaderEmitter.emit(LoaderEmitterEventsNames.STOP_LOADING, null);
        console.log('error', error);
      }
    );
    this.#instance = axios;
  }

  public get instance(): Axios {
    return this.#instance;
  }

  public get token(): string {
    return this.#token;
  }

  public set token(token: string) {
    this.#token = token;
    axios.interceptors.request.use(config => {
      const authToken = token;
      if (authToken) {
        config.headers.Authorization = authToken;
      }
      return config;
    });
    this.#instance = axios;
  }
}

const api = new ApiService();

export default api;
