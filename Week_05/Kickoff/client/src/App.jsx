import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Header,
  NestedRoutesIntroTab,
  NestedRoutesRandomTab,
  NestedRoutesUsesTab,
} from "./components";
import {
  BootstrapPage,
  CssModulesPage,
  HomePage,
  NestedRoutesPage,
} from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bootstrap" element={<BootstrapPage />} />
        <Route path="/css-modules" element={<CssModulesPage />} />
        <Route path="/nested-routes" element={<NestedRoutesPage />}>
          <Route path="" element={<NestedRoutesIntroTab />} />
          <Route path="uses" element={<NestedRoutesUsesTab />} />
          <Route path="random" element={<NestedRoutesRandomTab />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
