import SectionArea from "./components/sectionArea";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

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
  const [colorBar, setColorBar] = useState("#DFE212");
  const [nameSection, setNameSection] = useState();
  const [viewSection, setViewSection] = useState(<Home></Home>);

  useEffect(() => {
    console.log(viewSection.type.name);
    switch (viewSection.type.name) {
      case "Home":
        setNameSection("INICIO");
        setColorBar(color.home);
        break;
      case "About":
        setNameSection("SOBRE");
        setColorBar(color.about);
        break;
      case "Skills":
        setNameSection("SKILLS");
        setColorBar(color.skills);
        break;
      case "Projects":
        setNameSection("PROJETOS");
        setColorBar(color.projects);
        break;
      case "Contact":
        setNameSection("CONTATO");
        setColorBar(color.contact);
        break;
      default:
        return;
    }
  }, [
    color.about,
    color.contact,
    color.home,
    color.projects,
    color.skills,
    viewSection,
  ]);

  const returnSectionInitial = () => {
    setViewSection(<Home></Home>);
  };

  return (
    <div className="App">
      <SectionArea name={nameSection} color={colorBar}></SectionArea>
      {viewSection}
      <footer>
        <nav>
          <ul>
            <li
              style={
                viewSection.type.name === "About"
                  ? { backgroundColor: color.about }
                  : { backgroundColor: "#111111" }
              }
            >
              <button
                className="menu-btn"
                onClick={() =>
                  setViewSection(
                    <About
                      returnSection={returnSectionInitial}
                      color={color.about}
                    ></About>
                  )
                }
              >
                Sobre
              </button>
            </li>
            <li
              style={
                viewSection.type.name === "Skills"
                  ? { backgroundColor: color.skills }
                  : { backgroundColor: "#111111" }
              }
            >
              <button
                className="menu-btn"
                onClick={() =>
                  setViewSection(
                    <Skills
                      returnSection={returnSectionInitial}
                      color={color.skills}
                    ></Skills>
                  )
                }
              >
                Skills
              </button>
            </li>
            <li
              style={
                viewSection.type.name === "Home"
                  ? { backgroundColor: color.home }
                  : { backgroundColor: "#111111" }
              }
            >
              <button
                className="menu-btn"
                onClick={() =>
                  setViewSection(
                    <Home
                      returnSection={returnSectionInitial}
                      color={color.home}
                    ></Home>
                  )
                }
              >
                Inicio
              </button>
            </li>
            <li
              style={
                viewSection.type.name === "Projects"
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
                  )
                }
              >
                Projetos
              </button>
            </li>
            <li
              style={
                viewSection.type.name === "Contact"
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
                  )
                }
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
