import "./App.css";
import StudentInfo from "./components/StudentInfo";

function App() {
  return (
    <>
      <StudentInfo name="Cody" age={32} favoriteClass="programming" />
      <StudentInfo name="Marcus" age={30} favoriteClass="music" />
      <StudentInfo name="Johnathan" age={38} favoriteClass="programming" />
    </>
  );
}

export default App;
