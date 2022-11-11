//import SectionArea from "./components/sectionArea";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import SectionArea from "./components/sectionArea";
import Loader from "./components/loader";

import "./styles/nav.scss";

import { useEffect, useMemo, useState } from "react";

function App() {
  const color = useMemo(() => {
    return {
      home: "#cf2125",
      about: "#5199fe",
      skills: "#42a85f",
      projects: "#cf2155",
      contact: "#fea22be6",
    };
  }, []);
  const [viewSection, setViewSection] = useState();
  const [menu, setMenu] = useState();

  const returnSectionInitial = () => {
    setViewSection(<Home></Home>);
    setMenu('Home');
  };

  useEffect(() => {
    if(menu === undefined) {
      setTimeout(() => {
        setViewSection(<Home></Home>);
        setMenu('Home');
      }, 3700);
    }
  },[menu])

  return (
    <div className="App">
      {menu === undefined ? <Loader></Loader> : null}
      {menu !== "Home" && menu !== undefined ? <SectionArea></SectionArea> : null}
      {viewSection}
      <footer>
        <nav className={menu === undefined ? null : "animate__animated animate__zoomIn"}>
          <ul>
            <li
              style={
                menu === "About"
                  ? { backgroundColor: color.about }
                  : { backgroundColor: "#111111" }
              }
            >
              <button
                className="menu-btn"
                onClick={() =>
                  setViewSection(<About returnSection={returnSectionInitial}color={color.about}></About>) +
                  setMenu('About')}
              >
                Sobre
              </button>
            </li>
            <li
              style={
                menu === "Skills"
                  ? { backgroundColor: color.skills }
                  : { backgroundColor: "#111111" }
              }
            >
              <button
                className="menu-btn"
                onClick={() =>
                  setViewSection(<Skills returnSection={returnSectionInitial}color={color.skills}></Skills> ) +
                  setMenu('Skills')}
              >
                Skills
              </button>
            </li>
            <li
              style={
                menu === "Home"
                  ? { backgroundColor: color.home }
                  : { backgroundColor: "#111111" }
              }
            >
              <button
                className="menu-btn"
                onClick={() =>
                  setViewSection( <Home returnSection={returnSectionInitial} color={color.home}></Home>) +
                  setMenu('Home')}
              >
                Inicio
              </button>
            </li>
            <li
              style={
                menu === "Projects"
                  ? { backgroundColor: color.projects }
                  : { backgroundColor: "#111111" }
              }
            >
              <button
                className="menu-btn"
                onClick={() =>
                  setViewSection(
                    <Projects
                      returnSection={returnSectionInitial}
                      color={color.projects}
                    ></Projects>
                  ) +
                  setMenu('Projects')}
              >
                Projetos
              </button>
            </li>
            <li
              style={
                menu === "Contact"
                  ? { backgroundColor: color.contact }
                  : { backgroundColor: "#111111" }
              }
            >
              <button
                className="menu-btn"
                onClick={() =>
                  setViewSection(
                    <Contact
                      returnSection={returnSectionInitial}
                      color={color.contact}
                    ></Contact>
                  ) +
                  setMenu('Contact')}
              >
                Contato
              </button>
            </li>
          </ul>
        </nav>
      </footer>
  </div>
  );
}

export default App;
