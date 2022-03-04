import Aboutme from "./components/Aboutme";
import Contactme from "./components/Contactme";
import Footer from "./components/Footer";
import Front from "./components/Front";
import Navbar from "./components/Navbar";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
import "./styles/styles.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useEffect, useState } from "react/cjs/react.development";

function App() {
  const [scrollUp, setScrollUp] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      var scrollVal = parseInt(event.path[1].scrollY);
      if (scrollVal >= 100) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    });
  }, [scrollUp]);
  return (
    <>
      <Navbar />
      <Front />
      <Aboutme />
      <Skills />
      <Qualification />
      <Contactme />
      <Footer />
      <a
        href="#home"
        className="scrollup"
        style={{ bottom: scrollUp ? "5rem" : "-5rem" }}
        id="scroll-up"
      >
        <i className="r_icons scrollup_icon">
          <AiOutlineArrowUp />
        </i>
      </a>
    </>
  );
}

export default App;
