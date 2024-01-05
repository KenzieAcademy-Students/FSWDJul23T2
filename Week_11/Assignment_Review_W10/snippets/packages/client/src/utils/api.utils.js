import axios from "axios";
import { toast } from "react-toastify";
import { API_TARGET, API_URL } from "../constants.js";

const getUserToken = () => {
  const savedUser = JSON.parse(localStorage.getItem("MernAppUser"));
  return savedUser ? savedUser.token : "";
};

// configure axios api
const api = axios.create({
  baseURL: `${API_TARGET}/${API_URL}`,
});

api.defaults.headers.post["Content-Type"] = "application/json";
api.defaults.headers.common["Authorization"] = getUserToken();

api.interceptors.request.use(
  function (config) {
    const token = getUserToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export const setAuthToken = (token) => {
  if (token) {
    //applying token
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    //deleting the token from header
    delete api.defaults.headers.common["Authorization"];
  }
};

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401 && error.response.data.error) {
      toast.error(error.response.data.error);
    } else if (error.response.status === 401) {
      toast.error("Unauthorized");
      console.log(error.response.data.error);
    }
    if (error.response.status === 500) {
      toast.error("500 Server Error");
    }
    return Promise.reject(error);
  }
);

export default api;
