import { useEffect, useState } from "react";
import { useExpandSection } from "../hooks/useExpandSection";

import "../styles/skills.scss";

const Skills = ({ returnSection, color }) => {
  const descriptionSkills = {
    name: ["HTML", "CSS", "JAVASCRIPT", "SASS", "REACT", "BOOTSTRAP"],
    description: [
      'HTML (abreviação para a expressão inglesa HyperText Markup Language, que significa: "Linguagem de Marcação de Hipertexto") é uma linguagem de marcação utilizada na construção de páginas na Web.',
      "Cascading Style Sheets (CSS) é um mecanismo para adicionar estilo (cores, fontes, espaçamento, etc.) a um documento web.",
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
      "Sass é uma linguagem de folhas de estilo concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum. Depois de suas versões iniciais, Weizenbaum e Chris Eppstein continuaram a estender Sass com SassScript, uma simples linguagem de script usada em arquivos Sass.",
      "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
      "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.",
    ],
  };
  const buttonClicked = { 'filter': 'grayscale(0)' , 'transform': 'scale(1.2)' } ; 
  const [colorDescription, setColorDescription] = useState("");
  const [skills, setSkills] = useState();
  const [boolean, setBoolean] = useState(false);
  const expand = useExpandSection(boolean);

  useEffect(() => {
    switch (skills) {
      case 0:
        return setColorDescription("#E54D26");
      case 1:
        return setColorDescription("#3D8FC6");
      case 2:
        return setColorDescription("#F0DB4F");
      case 3:
        return setColorDescription("#CC6699");
      case 4:
        return setColorDescription("#61DAFB");
      case 5:
        return setColorDescription("#59407F");
      default:
        return;
    }
  }, [colorDescription, skills]);

  return (
    <section
      className="about animate__animated animate__slideInLeft"
      style={expand}
    >
      <div>
        <button
          className="expand-section"
          onClick={() =>
            boolean === false ? setBoolean(true) : setBoolean(false)
          }
        ></button>
        <button className="close-section" onClick={returnSection}></button>
      </div>
      <h5>SKILLS</h5>
      <h1 style={{'color' : color}}>Minhas Skills</h1>
      <div className="icons-skills">
        <i
          className="devicon-html5-plain colored tooltip"
          style={skills === 0 ? buttonClicked : null}
          onClick={() => {
            setSkills(0);
          }}
        ><span className="tooltiptext">HTML</span></i>
        <i className="devicon-css3-plain colored tooltip"
          style={skills === 1 ? buttonClicked : null}
         onClick={() => setSkills(1)}>
          <span className="tooltiptext">CSS</span>
         </i>
        <i
          className="devicon-javascript-plain colored tooltip"
          style={skills === 2 ? buttonClicked : null}
          onClick={() => setSkills(2)}
        ><span className="tooltiptext">JavaScript</span></i>
        <i
          className="devicon-sass-original colored tooltip"
          style={skills === 3 ? buttonClicked : null}
          onClick={() => setSkills(3)}
        ><span className="tooltiptext">Sass</span></i>
        <i
          className="devicon-react-original colored tooltip"
          style={skills === 4 ? buttonClicked : null}
          onClick={() => setSkills(4)}
        ><span className="tooltiptext">React</span></i>
        <i
          className="devicon-bootstrap-plain colored tooltip"
          style={skills === 5 ? buttonClicked : null}
          onClick={() => setSkills(5)}
        ><span className="tooltiptext">Bootstrap</span></i>
      </div>
      <div className="description-skills">
        <div style={{ backgroundColor: colorDescription }}>
          <h2>{descriptionSkills.name[skills]}</h2>
          <p>{descriptionSkills.description[skills]}</p>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Skills;
