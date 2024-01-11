import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import api from "../utils/api.utils";
import { Navigate } from "react-router-dom";

function DashboardPage() {
  const { auth } = useAuth();

  useEffect(() => {
    if (auth.isAuthenticated)
      api
        .get(`/users/${auth.user.username}`)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
  }, []);

  if (!auth.isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return (
    <Container>
      <h1>Dashboard</h1>
    </Container>
  );
}

export default DashboardPage;
