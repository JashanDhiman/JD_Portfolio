import Aboutme from "./components/Aboutme";
import Front from "./components/Front";
import Navbar from "./components/Navbar";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
import "./styles/styles.css";

function App() {
  return (
    <>
      <Navbar />
      <Front />
      <Aboutme />
      <Skills />
      <Qualification />
    </>
  );
}

export default App;
