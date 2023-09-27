import React, {useState, useContext, useEffect} from 'react'
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import moment from 'moment-timezone'

//Contexts
import {AppContext} from '@Contexts'

//Pages
import Home from '@Pages/Home.jsx'
import Product from '@Pages/Product.jsx'
import Cart from '@Pages/Cart.jsx'
import Error from '@Pages/Error.jsx'
import Count from '@Pages/Count.jsx'
import Legal from '@Pages/Legal.jsx'

import Layout from './layout.jsx'


function App() {

  const [ready, setReady] = useState(true)
  const limit = new Date(moment('2023-06-27T23:59:00').tz('Europe/Paris').format()).getTime()
  const now = new Date(moment().tz('Europe/Paris').format()).getTime()

  const {cart, initCart} = useContext(AppContext)

  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransistionStage] = useState('init')

  useEffect(() => {
    const store = window.localStorage.getItem('cart')
    if(store) {
      initCart(store.length ? store.split(',') : [])
    }else{
      initCart([])
    }
  }, [])

  useEffect(() => {
    document.body.classList.remove('Reveal')
    if (location.pathname !== displayLocation.pathname){
      setTransistionStage('fadeOut')
    }
  }, [location, displayLocation])

  const onPageReady = () => {
    setTransistionStage('fadeIn')
    document.documentElement.scrollTo({
      top      : 0,
      left     : 0,
      behavior : 'instant',
    })
  }
 
  if(!ready) return <Count afterDone={setReady} countDownDate={limit}/>

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === 'fadeOut') {
          setDisplayLocation(location)
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route element={<Layout cartItems={cart ? cart.length : null}/>} path="/">
          <Route index element={<Home ready={onPageReady}/>} />
          <Route element={<Product ready={onPageReady}/>} path="/product/:productId" />
          <Route element={<Cart ready={onPageReady} />} path="/cart" />
          <Route element={<Legal ready={onPageReady} />} path="/legal" />
          <Route element={<Error ready={onPageReady} />} path="*" />
        </Route>
      </Routes>
    </div>
  )
}

export default App
