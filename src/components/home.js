import React from 'react'

import 'animate.css'
import '../styles/home.scss'

import Code from '../images/code-typing-bro.svg'

const Home = () => {
  return (
    <section className='home animate__animated animate__slideInDown'>
      <div className='title-box'>
        <div>
          <div className='msg-box'>
          <p>Olá, meu nome é</p>
          </div>
          <h1>Bruno</h1>
          <h1>Sapalacio</h1>
          <h3>Desenvolvedor Frontend | HTML | CSS | JavaScript | React | Sass | Bootstrap</h3>
          <ul>
            <li><i class="devicon-github-original colored"></i></li>
            <li><i class="devicon-linkedin-plain colored"></i></li>
            <li><i class="devicon-facebook-plain colored"></i></li>
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