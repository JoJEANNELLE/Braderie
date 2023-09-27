import React, {useState} from 'react'
import {shape, arrayOf, func} from 'prop-types'
import {NavLink} from 'react-router-dom'
import {marked} from 'marked'

//Components
import ButtonMain from '@Components/ButtonMain/ButtonMain'

//Style
import './CartBloc.scss'

//Assets
import Trash from '@Assets/icons/Trash.svg'
import CardMC from '@Assets/icons/CardMC.svg'
import CardVisa from '@Assets/icons/CardVisa.svg'
import CardPaypal from '@Assets/icons/CardPaypal.svg'
import Blazon from '@Assets/shapes/Blazon.svg'

CartBloc.propTypes = {
  items    : arrayOf(shape({})).isRequired,
  onDelete : func.isRequired,
  onBuy    : func.isRequired,
}

function CartBloc({items, onDelete, onBuy}) {
  const [imgLoad, setImgLoad] = useState(false)

  const getPrices = (i) => {
    let p = 0
    i.forEach(item => {
      p = p + item.price
    })
    return new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR', maximumFractionDigits: 0}).format(p)
  }
  

  const capitalized = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  
  return (
    <div className='CartBloc'>
      {
        !items.length ?
          <div className='CartBloc-noresult'>
            <p>Vous n&apos;avez aucune recommandation dans votre panier</p>
            <NavLink
              to={`/`}
            >
              <ButtonMain label={`Voir toutes nos recos`} />
            </NavLink>
          </div>
          :
          <div className='CartBloc-result'>
            <div className='CartBloc-cart'>
              <p className='CartBloc-category CartBloc-category--item'>Panier</p>
              <div className='CartBloc-content CartBloc-content--item'>

                {items.map(item => (
                  <div key={item.uid} className='CartBloc-item'>
                    <div className='CartBloc-item-id'>
                      <div className={`CartBloc-item-visual ${imgLoad ? 'Load' : ''}`}>
                        <img src={item.visual.url}  onLoad={() => setImgLoad(true)} />
                        <span style={{backgroundImage: `url(${Blazon})`}} />
                      </div>
                      <div className='CartBloc-item-informations'>
                        <p className='CartBloc-item-informations--title'>{item.title}</p>
                        <p className='CartBloc-item-informations--sector'>{item.sector.title} - {capitalized(item.offer)}</p>
                      </div>
                    </div>
                    <div className='CartBloc-item-reduction'>
                      <span>-{item.promotion} %</span>
                    </div>
                    <div className='CartBloc-item-prices'>
                      <p className='CartBloc-item-prices--price'>{new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR', maximumFractionDigits: 0}).format(item.price)}</p>
                      <p className='CartBloc-item-prices--crossed'>{new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR', maximumFractionDigits: 0}).format(item.price / ((100 - item.promotion) / 100))}</p>
                    </div>
                    <div className='CartBloc-item-delete' onClick={() => onDelete(item.uid)}>
                      <img src={Trash}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='CartBloc-total'>
              <p className='CartBloc-category CartBloc-category--resume'>Total</p>
              <div className='CartBloc-content CartBloc-content--resume'>

                <div className='CartBloc-resume'>
                  <div className='CartBloc-resume-total'>
                    <p className='CartBloc-resume-total--label'>Prix Total</p>
                    <p className='CartBloc-resume-total--value'>{getPrices(items)}</p>
                  </div>
                  <div className='CartBloc-resume-delivery'>
                    <p className='CartBloc-resume-delivery--label'>Livraison</p>
                    <p className='CartBloc-resume-delivery--value'>Offerte</p>
                  </div>
                  <ButtonMain action={() => onBuy()} label={`Paiement`}/>
                  <div className='CartBloc-resume-paiement'>
                    <p className='CartBloc-resume-paiement--label'>Achats 100 % sécurisés</p>
                    <span className='CartBloc-resume-paiement--icons'>
                      <img src={CardMC}/>
                      <img src={CardVisa}/>
                      <img src={CardPaypal}/>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default CartBloc
