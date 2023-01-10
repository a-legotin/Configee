import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    process.env.CONFIGEE_API === undefined ? `/api` : `${process.env.CONFIGEE_API}/api`,
  withCredentials: true
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    return Promise.reject(error);
  }
);

const httpService = {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete
};

export default httpService;
