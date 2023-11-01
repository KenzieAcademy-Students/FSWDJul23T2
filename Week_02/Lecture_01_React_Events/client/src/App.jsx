import "./App.css";
import OnChangeDemo from "./components/OnChangeDemo";
// export default allows a singular item to be exported by default
import OnClickDemo from "./components/OnClickDemo";
import OnFocusAndBlurDemo from "./components/OnFocusAndBlurDemo";
// export allows a singular item to be exported as part of a collection of exports
// import { someFunction } from "./components/OnClickDemo";
import OnSubmitDemo from "./components/OnSubmitDemo";

function App() {
  return (
    <>
      <OnClickDemo />
      <hr />
      <OnSubmitDemo />
      <hr />
      <OnChangeDemo />
      <hr />
      <OnFocusAndBlurDemo />
    </>
  );
}

export default App;
