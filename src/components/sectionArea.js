import React from 'react'

import '../styles/sectionArea.scss'

const sectionArea = ({ name, color }) => {
  return (
      <div className='section-area animate__animated animate__slideInUp'>
        <h4 className='section-name'>{name}</h4>
        <div className='section-bar' style={{'backgroundColor': color}}></div>
      </div>
  )
}

export default sectionArea