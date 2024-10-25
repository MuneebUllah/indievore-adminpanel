import axios from 'axios';
import { dispatch } from 'store';
import { startLoading, stopLoading } from 'store/user-slice';
import Swal from 'sweetalert2';


export const Request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const useHttp = () => {
  function configureHeaders() {
    Request.interceptors.request.use(
      (config) => {
        dispatch(startLoading())
        const accessToken = localStorage.getItem('token');
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
      },
      (error) => Promise.reject(error),
    );
  }

  const configureInterceptors = () => {
    Request.interceptors.response.use(
      (response) => {
        dispatch(stopLoading())
        return response
      },
      async (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });

        console.error("API Error:", error);
        return Promise.reject(error);
      },
    );
  };
  return { configureHeaders, configureInterceptors }

}

export default useHttp