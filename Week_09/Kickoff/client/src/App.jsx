import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header, PlayerDetail } from "./components";
import { AxiosGet, AxiosPost, AxiosPut, HomePage } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="axios/get" element={<AxiosGet />}>
          <Route path=":id" element={<PlayerDetail />} />
        </Route>
        <Route path="axios/post" element={<AxiosPost />} />
        <Route path="axios/put/:id" element={<AxiosPut />} />
      </Routes>
    </>
  );
}

export default App;
