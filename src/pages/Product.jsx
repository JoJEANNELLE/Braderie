import React, {useEffect, useState, useContext} from 'react'
import {func} from 'prop-types'
import {useParams, useNavigate} from 'react-router-dom'
import {request} from '@Datocms'

//Contexts
import {AppContext} from '@Contexts'

//Pages
import Error from '@Pages/Error.jsx'

//Components
import ProductBloc from '@Components/ProductBloc/ProductBloc'
import CrossBloc from '@Components/CrossBloc/CrossBloc'
import TextStream from '@Components/TextStream/TextStream'
import Insurance from '@Components/Insurance/Insurance'
import Banner from '@Components/Banner/Banner'

//Queries
import {getProductById, getCrossById} from '@Queries'

Product.propTypes = {
  ready : func.isRequired,
}

function Product({ready}) {

  const [error, setError] = useState(false)
  const [product, setProduct] = useState(null)
  const [cross, setCross] = useState([])
  const {cart, addToCart} = useContext(AppContext)

  const {productId} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchProduct(productId)
    fetchCross(productId)
  }, [productId])

  async function fetchProduct(id) {
    let resp = null
    try {
      resp = await request({
        query : getProductById(id),
      })
    } catch (e) {
      console.log(e)
    }

    if(resp.product) {
      ready()
      setProduct(resp.product)
    }else {
      setError(true)
    }
  }

  async function fetchCross(id) {
    let resp = null
    try {
      resp = await request({
        query : getCrossById(id)
      })
    } catch (e) {
      console.log(e)
    }
    setCross(resp.allProducts)
  }

  const handleClick = () => {
    if(cart.includes(product.uid)) {
      navigate('/cart')
    }else {
      addToCart(product.uid)
    }
  }

  if(error) return <Error ready={ready}/>

  return <section className='Page Page--header'>
    <div className='Wrapper'>
      {
        product && <div>
          <ProductBloc
            handleClick={handleClick}
            isInCart={cart.includes(product.uid)}
            item={product}
          />
        </div>
      }
    </div>
    <TextStream />
    <CrossBloc items={cross} />
    <Insurance />
    <Banner />
  </section>
}

export default Product
