import React, { useContext } from "react";
import authContext from "../contexts/authContext";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(authContext);

  if (!user) return <Navigate to="/signup" />;
  return <div>Dashboard</div>;
};

export default Dashboard;
