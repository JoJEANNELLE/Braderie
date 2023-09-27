import React, {createContext, useMemo, useState} from 'react'
import {arrayOf, element, object, oneOfType, any} from 'prop-types'


AppProvider.propTypes = {
  children : oneOfType([
    arrayOf(element),
    object,
    any
  ]).isRequired,
}

const AppContext = createContext()

function AppProvider({children}){

  const [cart, setCart] = useState(null)

  const addToCart = (uid) => {
    const c = [...cart]
    c.push(uid)
    window.localStorage.setItem('cart', c)
    setCart(c)
  }

  const removeToCart = (uid) => {
    const c = [...cart].filter(x => x !== uid)
    window.localStorage.setItem('cart', c)
    setCart(c)
  }

  const emptyCart = (uid) => {
    window.localStorage.setItem('cart', [])
    setCart([])
  }

  const initCart = (cart) => {
    setCart(cart)
  }

  const ctx = useMemo(() => ({
    cart,
    addToCart,
    removeToCart,
    emptyCart,
    initCart
  }), [
    cart,
    addToCart,
    removeToCart,
    emptyCart,
    initCart
  ])

  return (
    <AppContext.Provider value={ctx}>
      {children}
    </AppContext.Provider>
  )
}

export {AppProvider, AppContext}