import { useContext } from "react";
import authContext from "../contexts/authContext";
import api from "../utils/api.utils";
import { toast } from "react-toastify";

const useAuth = () => {
  const { auth, dispatch } = useContext(authContext);

  const signup = async (username, password, confirmPassword) => {
    try {
      const response = await api.post("/auth/signup", {
        username,
        password,
        confirmPassword,
      });

      console.log(response);

      localStorage.setItem("app-auth", JSON.stringify(response.data));

      dispatch({ type: "SIGNIN", payload: response.data.user });
    } catch (error) {
      toast.error("Invalid submission, check form for details.");
      throw error;
    }
  };
  const signin = async (username, password) => {
    try {
      const response = await api.post("/auth/signin", {
        username,
        password,
      });

      console.log(response);

      localStorage.setItem("app-auth", JSON.stringify(response.data));

      dispatch({ type: "SIGNIN", payload: response.data.user });
    } catch (error) {
      toast.error("Invalid submission, check form for details.");
      throw error;
    }
  };
  const signout = () => {
    localStorage.removeItem("app-auth");
    dispatch({ type: "SIGNOUT" });
  };

  return {
    auth,
    signup,
    signin,
    signout,
  };
};

export default useAuth;
