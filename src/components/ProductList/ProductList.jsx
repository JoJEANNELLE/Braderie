import React, {useEffect, useState} from 'react'
import {arrayOf, shape} from 'prop-types'
import Select from 'react-select'

//Components
import ProductCard from '@Components/ProductCard/ProductCard'

//Style
import './ProductList.scss'

ProductList.propTypes = {
  items : arrayOf(shape({})).isRequired,
}

function ProductList({items}) {
  
  const [options, setOptions] = useState([])
  const [activeSector, SetActiveSector] = useState(null)
  const [filteredItems, SetFilteredItems] = useState(items)

  useEffect(() => {
    const sectorsList = []
    const offersList = []
    items.forEach(item => {
      if(!sectorsList.filter(x => x.value === item.sector.id).length) {
        sectorsList.push({value: item.sector.id, label: item.sector.title})
      }
      if(!offersList.filter(x => x.value === item.offer).length) {
        offersList.push({value: item.offer, label: capitalized(item.offer)})
      }
    })
    setOptions([
      {
        label   : 'Offres',
        options : offersList
      },
      {
        label   : 'Secteurs',
        options : sectorsList
      }
    ])
  },[items])

  useEffect(() => {
    if(activeSector) {
      SetFilteredItems(items.filter(x => x.sector.id === activeSector.value || x.offer === activeSector.value))
    }else {
      SetFilteredItems(items)
    }
  },[activeSector, items])

  const capitalized = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  return (
    <section className='ProductList'>
      <div className='Wrapper'>
        <div className='ProductList-filter'>
          <p className='ProductList-filter-count'>{`${filteredItems.length} recommandation${filteredItems.length >= 2 ? 's' : ''}`}</p>
          <div className='ProductList-filter-select'>
            <Select
              isClearable
              classNamePrefix="select"
              options={options}
              placeholder="Trier par offres et secteurs"
              theme={(theme) => ({
                ...theme,
                borderRadius : 0,
                colors       : {
                  ...theme.colors,
                  primary25 : '#e3e3e3',
                  primary50 : '#b8b8b8',
                  primary75 : '#6b6b6b',
                  primary   : 'black',
                },
              })}
              value={activeSector}
              onChange={(e) => SetActiveSector(e)}
            />
          </div>
        </div>
        <ul className='ProductList-items'>
          {
            filteredItems.map((item, index) => (<li key={item.uid} className='ProductList-item'><ProductCard index={index} item={item}/></li>))
          }
        </ul>
      </div>
    </section>
  )
}

export default ProductList
