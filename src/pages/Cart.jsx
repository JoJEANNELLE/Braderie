import React, {useEffect, useState, useContext, useRef} from 'react'
import {func} from 'prop-types'
import {request} from '@Datocms'
import {CSSTransition} from 'react-transition-group'

//Contexts
import {AppContext} from '@Contexts'

//Pages
import Insurance from '@Components/Insurance/Insurance'

//Queries
import {getProductsByIds} from '@Queries'

//Components
import CartBloc from '@Components/CartBloc/CartBloc'
import HoaxBloc from '@Components/HoaxBloc/HoaxBloc'

Cart.propTypes = {
  ready : func.isRequired,
}

function Cart({ready}) {
  const [showHoax, setShowHoax] = useState(false)
  const [products, setProducts] = useState([])
  const [cartProduct, setCartProduct] = useState([])

  const hoaxRef = useRef(null)
  const cartRef = useRef(null)
  
  const {cart, removeToCart, emptyCart} = useContext(AppContext)
  
  useEffect(() => {
    if(cart) {
      if(cart.length) {
        fetchCartProducts(cart)
      } else {
        ready()
      }
    }
  }, [cart])

  useEffect(() => {
    if(products) {
      setCartProduct(products.filter(x => cart.includes(x.uid)))
    }
  }, [cart, products])

  async function fetchCartProducts() {
    let resp = null
  
    try {
      resp = await request({
        query : getProductsByIds(cart),
      })
    } catch (e) {
      // clear localStorage
      console.log(e)
    }
    
    setProducts(resp.allProducts)
    ready()
  }

  const killCart = () => {
    document.documentElement.scrollTo({
      top      : 0,
      left     : 0,
      behavior : 'smooth',
    })
    setShowHoax(true)
    document.body.classList.add('Reveal')
    setTimeout(() => {
      emptyCart()
    }, 1500)
  }

  return <section className='Page Page--header Page--bg'>
    <CSSTransition
      in={showHoax}
      nodeRef={hoaxRef}
      timeout={1000}
    >
      <div ref={hoaxRef}>
        <HoaxBloc />
      </div>
    </CSSTransition>
    <CSSTransition
      in={!showHoax}
      nodeRef={cartRef}
      timeout={1000}
    >
      <div ref={cartRef}>
        <div className='Wrapper'>
          <CartBloc
            items={cartProduct}
            onBuy={() => killCart()}
            onDelete={(uid) => removeToCart(uid)}
          />
        </div>
        <Insurance />
      </div>
    </CSSTransition>
  </section>
}

export default Cart
