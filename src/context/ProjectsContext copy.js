import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = "http://localhost:3000/projects";

export const context = createContext();

export const ProjectsContext = ({ children }) => {
  const [projects, setProjects] = useState(null);
  
  useEffect(() => {
    (async function() {
      await axios.get(baseURL).then((response) => { // Chama os dados do arquivo db.json e joga no 'projects'
        setProjects(response.data);
      }).catch((error) => {
        console.error('ocorreu um erro: ' + error);
      });
    })();

  },[]);

  return (
    <context.Provider value={{ projects }}>
      {children}
    </context.Provider>
  )
}

export default ProjectsContext;
