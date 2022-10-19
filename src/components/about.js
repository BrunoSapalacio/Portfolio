import { useState } from "react";
import { useExpandSection } from "../hooks/useExpandSection";

import "../styles/about.scss";

import Bruno from "../images/bruno.jpg"
import Unip from "../images/unip.png"
import CursoEmVideo from "../images/cursoemvideo.png"
import Udemy from "../images/udemy.png"

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
          <div className="profile" >
            <img src={Bruno} alt="" />
            <p>
              Olá! Me chamo Bruno e sou um amante da tecnologia desde o meu
              primeiro contato em um computador(lá por volta de 2006). Sempre tive
              facilidade com tecnologia e desde de criança eu já resolvia os
              problemas que dava em meu computador. Eu gosto de ser util e
              contribuir, pois isso é algo que me faz se sentir bem. Após anos de
              vivência em frente ao computador, me despertou o interesse de criar
              coisas e entender como é feito o processo de criação. Primeramente
              comecei criando servidores de jogos online, baixava os arquivos
              fontes, ficando fuçando os arquivo, vendo como funcionava e muitos
              desses servidores usavam website com conexão mySql para criação das
              contas e quando eu tive contato pela primeira vez com um website,
              acabei me apaixonando! hahaha. Dali em diante comecei a pesquisar a
              respeito de como criar um website, acabei conhecendo as linguagens
              web e acabou virando um hooby para mim na adolescencia. Após alguns
              anos acabei entrando na faculdade para poder ingressar no mercado e
              desde então eu venho estudando para me tornar um desenvolvedor
              Front-end completo. Estou sempre em busca de desafios e soluções de
              problemas voltado para a Web.
            </p>
          </div>
          <h1 style={{'color' : color}}>Formação</h1>
          <div className="formation-card">
            <img src={Unip} alt="" />
            <div>
              <h4>Unip 2020 - 2021</h4>
              <h2>Análise e Desenvolvimento de Sistemas</h2>
              <p>Projetar, desenvolver, implantar e manter Sistemas de Informação, gerenciar equipes de desenvolvimento de sistemas, diagnosticar problemas e propor melhorias baseadas em sistemas computacionais, aplicar adequadamente recursos computacionais (hardware e software), projetar e implementar Sistemas de Informação aderentes aos objetivos estratégicos das organizações, produzir software utilizando métodos e técnicas adequadas, visando a alcançar os atributos essenciais de software.</p>
            </div>
          </div>
          <div className="formation-card">
            <img src={CursoEmVideo} alt="" />
            <div>
              <h4>Curso em Video 2022</h4>
              <h2>Javascript [40 Horas]</h2>
              <p>Curso de linguagem JavaScript, voltado para iniciantes e para quem quiser aprender mais sobre ECMAScript, a versão padronizada do JS. É um curso patrocinado pelo Google e apresentado pelo professor Gustavo Guanabara, no qual ensina o conteúdo básico de JavaScript em 6 módulos, que vão desde o conhecimento da linguagem até o uso de funções.</p>
            </div>
          </div>
          <div className="formation-card">
            <img src={Udemy} alt="" />
            <div>
              <h4>Udemy 2022</h4>
              <h2>React Completo do básico ao avançado</h2>
              <p>Conceitos principais de JavaScript moderno, instalação e configuração do ambiente, instalação de pacotes usando Node Package Manager,
                fazer requisições HTTP em APIs Web, principais métodos de ciclo de vida de um componente React, hooks, fazer rotas,
                Redux, validação de Formulários, Formik, Yup, fazer Deploy da sua aplicação React em um servidor.</p>
            </div>
          </div>
          <div className="formation-card">
            <img src={Udemy} alt="" />
            <div>
              <h4>Udemy 2022</h4>
              <h2>CSS Avançado - Sass, CSS Grid Layout e CSS Modules</h2>
              <p>Revisão de Flexbox, CSS Grid Layout, aprender a como utilizar o Sass(um pré-processador de CSS que nos permite escrever classes CSS de maneira programática) e por último, o que são os CSS Modules.</p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;
