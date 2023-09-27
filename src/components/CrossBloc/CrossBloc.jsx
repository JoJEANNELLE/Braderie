import React from 'react'
import {arrayOf, shape} from 'prop-types'

//Components
import ProductCard from '@Components/ProductCard/ProductCard'

//Style
import './CrossBloc.scss'

CrossBloc.propTypes = {
  items : arrayOf(shape({})).isRequired,
}

function CrossBloc({items}) {

  return (
    <section className='CrossBloc'>
      <div className='Wrapper'>
        <p className='CrossBloc-title'>et aussi</p>
        <ul className='CrossBloc-items'>
          {
            items.map((item, index) => (<li key={item.uid} className='CrossBloc-item'><ProductCard index={index} item={item}/></li>))
          }
        </ul>
      </div>
    </section>
  )
}

export default CrossBloc
