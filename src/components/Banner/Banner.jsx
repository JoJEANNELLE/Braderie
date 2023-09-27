import React from 'react'
import {useParallax} from 'react-scroll-parallax'

//Assets
import CoverBanner from '@Assets/shapes/cover/CoverBanner.svg'

//Style
import './Banner.scss'

function Banner() {

  const back = useParallax({
    translateY                    : [0, -50],
    shouldAlwaysCompleteAnimation : true
  })

  return (
    <section className='Banner'>
      <div
        ref={back.ref}
        className="Banner-cover"
        style={{backgroundImage: `url(${CoverBanner})`}}
      />
      <div className='Wrapper'>
        <p>
          <span className='Banner-title'>
            Media, planning stratégique, création, intelligence collective,
            business innovation, tech, contenu, social média :
          </span>&nbsp;
          nos recos sont conçues avec amour par des experts reconnus dans leurs
          domaines.
        </p>
      </div>
    </section>
  )
}

export default Banner
