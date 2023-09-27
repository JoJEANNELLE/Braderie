import React from 'react'
import {NavLink} from 'react-router-dom'

//Components
import ButtonMain from '@Components/ButtonMain/ButtonMain'

//Assets
import CoverBanner from '@Assets/shapes/cover/CoverBanner.svg'

//Style
import './ErrorBloc.scss'

function ErrorBloc() {

  return (
    <div
      className='ErrorBloc'
      style={{backgroundImage: `url(${CoverBanner})`}}
    >
      <div className='ErrorBloc-content'>
        <p className='ErrorBloc-code'>404</p>
        <p className='ErrorBloc-message'>La page demandée n&apos;existe pas</p>
        <NavLink
          to={`/`}
        >
          <ButtonMain label={`Revenir à l'accueil`} />
        </NavLink>
      </div>
    </div>
  )
}

export default ErrorBloc
