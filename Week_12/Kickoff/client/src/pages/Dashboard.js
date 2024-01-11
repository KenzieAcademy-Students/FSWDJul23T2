import React from "react";
import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const Dashboard = () => {
  const { auth } = useAuth();

  if (!auth.isLoaded) return <Container>Loading</Container>;

  if (!auth.isAuthorized) return <Navigate to="/login" />;

  return (
    <Container>
      <h1>if you see this ur logged in</h1>
    </Container>
  );
};

export default Dashboard;
