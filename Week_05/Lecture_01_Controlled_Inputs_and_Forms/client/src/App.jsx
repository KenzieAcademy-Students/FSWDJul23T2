import "./App.css";
import Forms from "./components/Forms";

function App() {
  console.time("App render");
  return (
    <>
      <Forms />
      {console.timeEnd("App render")}
    </>
  );
}

export default App;
