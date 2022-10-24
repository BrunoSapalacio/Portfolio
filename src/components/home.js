import React from 'react'

import 'animate.css'
import '../styles/home.scss'

import Code from '../images/code-typing-bro.svg'

const Home = () => {
  return (
    <section className='home animate__animated animate__slideInLeft'>
      <div className='title-box'>
        <div>
          <div className='msg-box'>
          <p>Olá, meu nome é</p>
          </div>
          <h1>Bruno</h1>
          <h1>Sapalacio</h1>
          <h3>Desenvolvedor Frontend | HTML | CSS | JavaScript | React | Sass | Bootstrap</h3>
          <ul>
            <li><a href='https://github.com/BrunoSapalacio' target="_blank" rel="noreferrer"><i className="devicon-github-original colored tooltip"><span className="tooltiptext">Clique aqui para ver o meu Github</span></i></a></li>
            <li><a href='https://www.linkedin.com/in/bruno-sapalacio-mineiro-0b7a25231/' target="_blank" rel="noreferrer"><i className="devicon-linkedin-plain colored tooltip"><span className="tooltiptext">Clique aqui para ver o meu LinkedIn</span></i></a></li>
          </ul>
        </div>
      </div>
      <div className='img-box'>
        <img src={Code} alt="" />
      </div>
    </section>
  )
}   

export default Home