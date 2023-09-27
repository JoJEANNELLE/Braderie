import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {useParallax} from 'react-scroll-parallax'
import {shape, number} from 'prop-types'

//Assets
import Blazon from '@Assets/shapes/Blazon.svg'

//Style
import './ProductCard.scss'

ProductCard.propTypes = {
  item : shape({

  }).isRequired,
  index : number.isRequired,
}

function ProductCard({item, index}) {
  const [imgLoad, setImgLoad] = useState(false)

  const card = useParallax({
    scale                         : [1.2, 1.2],
    translateY                    : [-15, 15],
    shouldAlwaysCompleteAnimation : true
  })

  return (
    <NavLink
      // ref={card.ref}
      className='ProductCard'
      to={`/product/${item.uid}`}
    >
      <div className={`ProductCard-visual ${imgLoad ? 'Load' : ''}`}>
        <img ref={card.ref} src={item.visual.url} onLoad={() => setImgLoad(true)}/>
        <span style={{backgroundImage: `url(${Blazon})`}} />
        <div className={`ProductCard-visual-hover Color--${item.color}`}>
          <p>{item.subtitle}</p>
        </div>
      </div>
      <span  className='ProductCard-tag'>{item.sector.title}</span>
      <span  className='ProductCard-tag ProductCard-tag--offer'>{item.offer}</span>
      <span className='ProductCard-name'>{item.title}</span>
      <span className='ProductCard-price'>
        <span>{new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR', maximumFractionDigits: 0}).format(item.price)}</span>
        <span  className='ProductCard-price--crossed'>{new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR', maximumFractionDigits: 0}).format(item.price / ((100 - item.promotion) / 100))}</span>
      </span>
      <span className='ProductCard-reduction'>-{item.promotion} %</span>
    </NavLink>
  )
}

export default ProductCard
