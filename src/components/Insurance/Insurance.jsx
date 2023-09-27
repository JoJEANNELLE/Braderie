import React from 'react'

//Assets
import Users from '@Assets/icons/Users.svg'
import Glasses from '@Assets/icons/Glasses.svg'
import Shield from '@Assets/icons/Shield.svg'

//Style
import './Insurance.scss'

function Insurance() {
  return (
    <section className='Insurance'>
      <div className='Wrapper'>
        <ul>
          <li className='Insurance-item'>
            <img src={Users}/>
            <div className='Insurance-texte'>
              <p className='Insurance-texte--title'>100% pertinents</p>
              <p>
                Notre intelligence créative
                pour augmenter l&apos;impact
                de vos projets
              </p>
            </div>
          </li>
          <li className='Insurance-item'>
            <img src={Glasses}/>
            <div className='Insurance-texte'>
              <p className='Insurance-texte--title'>Des méthodes de travail</p>
              <p>
                efficaces et éprouvées
              </p>
            </div>
          </li>
          <li className='Insurance-item'>
            <img src={Shield}/>
            <div className='Insurance-texte'>
              <p className='Insurance-texte--title'>Certifié IMPACT</p>
              <p>
                La garantie d&apos;atteindre les performances visées
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Insurance
