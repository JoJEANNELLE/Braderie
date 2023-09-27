import React, {useState} from 'react'
import {shape, bool, func} from 'prop-types'
import {marked} from 'marked'
import {useParallax} from 'react-scroll-parallax'

//Components
import ButtonStates from '@Components/ButtonStates/ButtonStates'

//Assets
import Blazon from '@Assets/shapes/Blazon.svg'
import BadgeTagline from '@Assets/icons/BadgeTagline.svg'

//Style
import './ProductBloc.scss'

ProductBloc.propTypes = {
  item        : shape({}).isRequired,
  isInCart    : bool.isRequired,
  handleClick : func.isRequired,
}

function ProductBloc({item, isInCart, handleClick}) {
  const [imgLoad, setImgLoad] = useState(false)


  const badge = useParallax({
    scale                         : [1, .7],
    shouldAlwaysCompleteAnimation : true
  })

  const visual = useParallax({
    scale                         : [1, 1.3],
    shouldAlwaysCompleteAnimation : true
  })
  
  return (
    <div
      className='ProductBloc'
    >
      <div className='ProductBloc-sides'>
        <div>
          <div className='ProductBloc-left'>
            <div className={`ProductBloc-visual ${imgLoad ? 'Load' : ''}`}>
              <img ref={visual.ref} src={item.visualProduct.url} onLoad={() => setImgLoad(true)}/>
              <span style={{backgroundImage: `url(${Blazon})`}} />
            </div>
            <div ref={badge.ref} className='ProductBloc-badge' style={{backgroundImage: `url(${BadgeTagline})`}}>
              <div className='Percent'>-{item.promotion}<span>%</span></div>
            </div>
          </div>
        </div>
        <div>
          <p className='ProductBloc-title'>{item.title}</p>
          <div className='ProductBloc-filter'>
            <p className='ProductBloc-sector'>{item.sector.title}</p>
            <p className='ProductBloc-offer'>{item.offer}</p>
          </div>
          <p className='ProductBloc-subtitle'>{item.subtitle}</p>
          <span className='ProductBloc-price'>
            <span>{new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR', maximumFractionDigits: 0}).format(item.price)}</span>
            <span  className='ProductBloc-price--crossed'>{new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR', maximumFractionDigits: 0}).format(item.price / ((100 - item.promotion) / 100))}</span>
            {/* <span className='ProductBloc-price--reduction'>-{item.promotion} %</span> */}
          </span>
          <ButtonStates action={() => handleClick()} isActive={isInCart} />
          <div className='ProductBloc-formats'>
            <p>Formats disponibles :</p>
            <div className='ProductBloc-tags'>
              <span className='ProductBloc-tag'>PDF</span>
              <span className='ProductBloc-tag'>PPT</span>
              <span className='ProductBloc-tag'>JPG</span>
            </div>
          </div>
          <div className='ProductBloc-formats'>
            <p>Composition :</p>
            <div className='ProductBloc-tags'>
              {item.composition.map(x => <span key={x.name} className='ProductBloc-tag'>{x.name}</span>)}
            </div>
          </div>
        </div>
      </div>
      <div className='ProductBloc-description'>
        <p className='ProductBloc-description-title'>Description de la recommandation</p>
        <div className='ProductBloc-description-paragraph' dangerouslySetInnerHTML={{__html: marked(item.description, {sanitize: true})}} />
      </div>
    </div>
  )
}

export default ProductBloc
