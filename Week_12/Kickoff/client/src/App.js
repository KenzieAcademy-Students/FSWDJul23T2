import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "./pages/SignupPage";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import SigninPage from "./pages/SigninPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="register" element={<SignupPage />} />
        <Route path="login" element={<SigninPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
