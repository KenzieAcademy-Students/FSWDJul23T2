import { useEffect } from "react";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

export function useRequireAuth(redirectUrl = "/login") {
  const auth = useAuth();
  let navigate = useNavigate();

  // If auth.user is false that means we're not
  // logged in and should redirect.
  useEffect(() => {
    if (auth.state.isAuthenticated === false) {
      navigate(redirectUrl);
    }
  }, [auth, navigate, redirectUrl]);

  return auth;
}
