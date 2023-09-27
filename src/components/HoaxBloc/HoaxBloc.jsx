import React from 'react'

//Components
import ButtonMain from '@Components/ButtonMain/ButtonMain'

//Style
import './HoaxBloc.scss'

//Assets
import TextHoax1 from '@Assets/texts/TextHoax1.svg'
import TextHoax2 from '@Assets/texts/TextHoax2.svg'
import LogoInsign from '@Assets/logos/LogoInsign.svg'
import CoverHoax from '@Assets/shapes/cover/CoverHoax.svg'

function HoaxBloc() {
  
  return (
    <div className='HoaxBloc'>
      <div
        className="HoaxBloc-cover"
        style={{backgroundImage: `url(${CoverHoax})`}}
      />
      <div className='Wrapper'>
        <div>
          <div className='HoaxBloc-title'>
            <img className='HoaxBloc-title--up' src={TextHoax1}/>
            <img className='HoaxBloc-title--down' src={TextHoax2} />
            <img className='HoaxBloc-title--logo' src={LogoInsign} />
          </div>
        </div>
        <div className='HoaxBloc-texte'>
          <p className='HoaxBloc-texte-bold'>
            L’économie tourne au ralenti et on nous demande de plus en plus de
            tirer nos prix vers le bas. Mais ce n’est pas une solution : plus
            nous acceptons de nous brader, plus nous dégradons la valeur de
            notre métier de conseil aux yeux de nos clients et du marché.
          </p>
          <p>
            Insign regroupe des experts reconnus en média, planning stratégique,
            création, intelligence collective, business innovation, tech,
            contenu et social média. Ce sont des métiers à haute valeur ajoutée
            qui ne sauraient être bradés sous peine d’être dévalorisés.
          </p>
          <p>
            Réunis au service d’un même projet - le vôtre - nos talents
            n&apos;ont qu&apos;une obsession : apporter une réponse plus
            performante et plus impactante pour votre entreprise. Il vous suffit
            juste de prendre rendez-vous avec nous.
          </p>
          <a href='https://www.insign.fr/contact-braderie.html' rel="noreferrer" target={'_blank'}>
            <ButtonMain label="Contactez-nous" modifier="Inverse"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HoaxBloc
