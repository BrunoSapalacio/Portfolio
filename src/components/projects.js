import React, { useState } from "react";
import { useExpandSection } from "../hooks/useExpandSection";
import { projectsData } from '../data/projectsData';

// Css
import '../styles/project.scss'

const Projects = ({ returnSection , color }) => {
  const [boolean, setBoolean] = useState(false);
  const expand = useExpandSection(boolean);
  
  return (
    <section className='project animate__animated animate__slideInLeft'
    style={expand}>
      <div>
        <button className="expand-section" onClick={() => boolean === false ? setBoolean(true) : setBoolean(false)}></button>
        <button className="close-section" onClick={returnSection}></button>
      </div>
      <h5>PROJETOS</h5>
      <h1 style={{'color' : color}}>Meus Projetos</h1>
        {projectsData.map((projeto, index) => 
        <div key={index} className="container-project">
          <div className="info-project">
            <div className="title-project">
              <h4>Projeto {projeto.number}</h4>
              <h2>{projeto.title}</h2>
            </div>
            <p>{projeto.description}</p>
             <ul className="skills-project">
            {projeto.skills.map((skills, index) => 
              <li key={index}>{skills}</li>
              )}
            </ul>
            <div>
              <a href={projeto.link} target="_blank" rel="noreferrer" className="btn-project tooltip">Projeto
              <span className="tooltiptext">Clique aqui para ver o projeto</span></a>
              <a href={projeto.repo} target="_blank" rel="noreferrer" className="btn-repo tooltip">Repositório
              <span className="tooltiptext">Clique aqui para ver o repositório</span></a>
            </div>
          </div>
          <img className="img-project" src={projeto.img} alt="" />
        </div>
        )}
    </section>
  )       
}

export default Projects