// Css
import '../styles/sectionArea.scss'

const sectionArea = () => {
  return (
      <div className='section-area'>
        <div className='section-icon'>
          <a className="github tooltip" href='https://github.com/BrunoSapalacio' target="_blank" rel="noreferrer"><span className="tooltiptext section-tooltip">GitHub</span></a>
          <a className="linkedin tooltip" href='https://www.linkedin.com/in/bruno-sapalacio-mineiro-0b7a25231/' target="_blank" rel="noreferrer"><span className="tooltiptext section-tooltip">LinkedIn</span></a>
          <a className="instagram tooltip" href='https://www.instagram.com/bruno.sapalacio/?hl=pt-br' target="_blank" rel="noreferrer"><span className="tooltiptext section-tooltip">Instagram</span></a>
          <a className="facebook tooltip" href='https://www.facebook.com/bruno.sapalacio' target="_blank" rel="noreferrer"><span className="tooltiptext section-tooltip">Facebook</span></a>
        </div>
      </div>
  )
}

export default sectionArea