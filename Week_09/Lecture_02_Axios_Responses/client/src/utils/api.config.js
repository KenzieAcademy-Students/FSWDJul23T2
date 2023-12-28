import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "http://localhost:3001/api",
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 404) {
      toast.error("Resource not found, please try again later.");
    } else if (err.response.status === 422) {
      toast.error(
        "Invalid submission. Check the form for feedback and try again."
      );
    }

    throw err;
  }
);

export default api;
