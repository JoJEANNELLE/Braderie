import React from 'react'
import {NavLink} from 'react-router-dom'

//Assets
import SocialFacebook from '@Assets/icons/SocialFacebook.svg'
import SocialInstagram from '@Assets/icons/SocialInstagram.svg'
import SocialLinkedin from '@Assets/icons/SocialLinkedin.svg'
import SocialTwitter from '@Assets/icons/SocialTwitter.svg'
import ArrowRight from '@Assets/icons/ArrowRight.svg'

//Style
import './Footer.scss'

function Footer() {
  return (
    <section className='Footer'>
      <div className='Footer-wrapper'>
        <div className='Footer-insign'>
          <a href='https://www.insign.fr/' rel="noreferrer" target='_blank'>
            insign.fr
            <span className="Arrow" style={{backgroundImage: `url(${ArrowRight})`}} />
          </a>
        </div>
        <div className='Footer-links'>
          <NavLink
            className='link'
            to={`/legal`}
          >
            Mentions légales
          </NavLink>
        </div>
        <div className='Footer-social'>
          <a href='https://twitter.com/Agence_Insign' rel="noreferrer" target='_blank'><img alt='twitter' src={SocialTwitter}/></a>
          <a href='https://www.facebook.com/Insignagence/' rel="noreferrer" target='_blank'><img alt='facebook' src={SocialFacebook}/></a>
          <a href='https://www.instagram.com/agence_insign/' rel="noreferrer" target='_blank'><img alt='instagram' src={SocialInstagram}/></a>
          <a href='https://www.linkedin.com/company/insign-agency/' rel="noreferrer" target='_blank'><img alt='facebook' src={SocialLinkedin}/></a>
        </div>
      </div>
    </section>
  )
}

export default Footer
