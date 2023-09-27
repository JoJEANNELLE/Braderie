import React from 'react'
import {string} from 'prop-types'

//Assets
import CoverHome from '@Assets/shapes/cover/CoverHome.svg'

//Style
import './PageTitle.scss'

PageTitle.propTypes = {
  title : string.isRequired,
}

function PageTitle({title}) {

  return (
    <div
      className='PageTitle'
      style={{backgroundImage: `url(${CoverHome})`}}
    >
      <div
        className="Wrapper"
        
      >
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default PageTitle
