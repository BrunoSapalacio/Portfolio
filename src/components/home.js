//Css
import 'animate.css'
import '../styles/home.scss'
import '../styles/background.scss'

//Imagem
import Code from '../images/code-typing-bro.svg'

const Home = () => {
  return (
    <section className='home animate__animated animate__zoomIn'>
      <div className='lines'>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className='title-box'>
        <div>
          <div className='msg-box'>
          <p>Olá, meu nome é</p>
          </div>
          <div className="stack" style={{'--stacks': "3"}}>
            <h1 style={{'--index': "0"}}>BRUNO</h1>
            <h1 style={{'--index': "1"}}>BRUNO</h1>
            <h1 style={{'--index': "2"}}>BRUNO</h1>
          </div>
          <div className="stack" style={{'--stacks': "3"}}>
            <h1 style={{'--index': "0"}}>SAPALACIO</h1>
            <h1 style={{'--index': "1"}}>SAPALACIO</h1>
            <h1 style={{'--index': "2"}}>SAPALACIO</h1>
          </div>
          <h3>Desenvolvedor Front-end | HTML | CSS | JavaScript | React | Sass | Bootstrap</h3>
          <ul>
          <a className="github-2 tooltip" href='https://github.com/BrunoSapalacio' target="_blank" rel="noreferrer"><span className="tooltiptext">GitHub</span></a>
          <a className="linkedin tooltip" href='https://www.linkedin.com/in/bruno-sapalacio-mineiro-0b7a25231/' target="_blank" rel="noreferrer"><span className="tooltiptext">LinkedIn</span></a>
          <a className="instagram tooltip" href='https://www.instagram.com/bruno.sapalacio/?hl=pt-br' target="_blank" rel="noreferrer"><span className="tooltiptext">Instagram</span></a>
          <a className="facebook tooltip" href='https://www.facebook.com/bruno.sapalacio' target="_blank" rel="noreferrer"><span className="tooltiptext">Facebook</span></a>
          <a className="whatsapp tooltip" href="https://wa.me/5515991573088?text=Ol%C3%A1,%20gostaria%20de%20entrar%20em%20contato!" target="_blank" rel="noreferrer"><span className="tooltiptext">Whatsapp</span></a>
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