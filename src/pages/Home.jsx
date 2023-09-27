import React, {useEffect, useState} from 'react'
import {request} from '@Datocms'
import {func} from 'prop-types'

//Queries
import {getProducts} from '@Queries'

//Components
import Welcomer from '@Components/Welcomer/Welcomer'
import TextStream from '@Components/TextStream/TextStream'
import Manifest from '@Components/Manifest/Manifest'
import ProductList from '@Components/ProductList/ProductList'
import Insurance from '@Components/Insurance/Insurance'
import Banner from '@Components/Banner/Banner'

Home.propTypes = {
  ready : func.isRequired,
}

function Home({ready}) {
  const [active, setActive] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    let resp = null
  
    try {
      resp = await request({
        query : getProducts(),
      })
    } catch (e) {
      console.log(e)
    }
    
    setProducts(resp.allProducts)
    setActive(true)
    ready()
  }

  return (
    <div className={`Page ${active ? 'Active' : ''}`}>
      <Welcomer />
      <TextStream />
      <Manifest />
      <ProductList items={products}/>
      <Insurance />
      <Banner />
    </div>
  )
}

export default Home
