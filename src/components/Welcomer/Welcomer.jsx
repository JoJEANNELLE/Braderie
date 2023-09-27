import React from 'react'
import {useParallax} from 'react-scroll-parallax'

//Assets
import CoverHome from '@Assets/shapes/cover/CoverHome.svg'
import TextWelcomer from '@Assets/texts/TextWelcomer.svg'
import BadgeSante from '@Assets/icons/BadgeSante.svg'
import BadgeInstitution from '@Assets/icons/BadgeInstitution.svg'
import BadgeIndustrie from '@Assets/icons/BadgeIndustrie.svg'
import BadgeEductation from '@Assets/icons/BadgeEductation.svg'
import BadgeCommerce from '@Assets/icons/BadgeCommerce.svg'

//Style
import './Welcomer.scss'


function Welcomer() {

  const back = useParallax({
    translateY                    : [0, 200],
    shouldAlwaysCompleteAnimation : true
  })

  return (
    <section
      className='Welcomer'
    >
      <div
        ref={back.ref}
        className="Welcomer-cover"
        style={{backgroundImage: `url(${CoverHome})`}}
      />
      <div className="Welcomer-content">
        <div className="Wrapper">
          <img className="Welcomer-title" src={TextWelcomer}/>
          <div className="Welcomer-badges">
            <img className="Welcomer-badge Welcomer-badge--1" src={BadgeCommerce} />
            <img className="Welcomer-badge Welcomer-badge--2" src={BadgeInstitution} />
            <img className="Welcomer-badge Welcomer-badge--3" src={BadgeSante} />
            <img className="Welcomer-badge Welcomer-badge--4" src={BadgeEductation} />
            <img className="Welcomer-badge Welcomer-badge--5" src={BadgeIndustrie} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcomer
