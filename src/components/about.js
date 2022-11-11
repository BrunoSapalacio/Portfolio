import { useState } from "react";
import { useExpandSection } from "../hooks/useExpandSection";
import { coursesData } from "../data/coursesData";

// Css
import "../styles/about.scss";

// Imagens
import Bruno from "../images/bruno.jpg";

const About = ({ returnSection, color }) => {
  const [boolean, setBoolean] = useState(false);
  const expand = useExpandSection(boolean);
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
      <h5>SOBRE</h5>
      <h1 style={{ color: color }}>Um resumo sobre mim...</h1>
      <div className="content-about">
        <div className="profile">
          <img src={Bruno} alt="" />
          <p>
            Olá! Me chamo Bruno e sou apaixonado pela tecnologia desde o meu
            primeiro contato em um computador (lá por volta de 2006). Sempre
            tive facilidade com tecnologia e desde criança eu já resolvia os
            problemas que aparecia em meu computador. Eu gosto de ser útil e
            contribuir, pois isso é algo que me faz se sentir bem. Após anos de
            vivência em frente ao computador, me despertou o interesse de criar
            sistemas e entender como é feito o processo de criação.
            Primeiramente comecei criando servidores de jogos online, baixava os
            arquivos fontes, ficava fuçando os arquivos, vendo como funcionava,
            e muitos desses servidores usavam website com conexão mySql para
            criação e gerenciamento das contas, e quando eu tive contato pela
            primeira vez, acabei me apaixonando. Dali em diante comecei a
            pesquisar a respeito de como criar um website, acabei conhecendo as
            linguagens web e acabou virando um hobby para mim na adolescência.
            Após alguns anos acabei entrando na faculdade para poder ingressar
            no mercado de trabalho e desde então eu venho estudando para me
            tornar um desenvolvedor Front-end completo. Estou sempre em busca de
            desafios e soluções de problemas voltados para a Web.
          </p>
        </div>
        <h1 style={{ color: color }}>Formação</h1>
        {coursesData.map((course, index) => (
          <div key={index} className="formation-card">
            <img src={course.img} alt="" />
            <div>
              <h4>{course.institution}</h4>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
