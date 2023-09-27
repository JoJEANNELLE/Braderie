import React, {useEffect, useState} from 'react'
import {NavLink, useLocation, Outlet} from 'react-router-dom'
import {number} from 'prop-types'

//Assets
import LogoInsign from '@Assets/logos/LogoInsign.svg'
import LogoInsignLGB from '@Assets/logos/LogoInsignLGB.svg'

//Components
import CartMenu from '@Components/CartMenu/CartMenu'
import Footer from '@Components/Footer/Footer'

Layout.propTypes = {
  cartItems : number,
}

Layout.defaultProps = {
  cartItems : null,
}

function Layout({cartItems}) {
  const {pathname} = useLocation()
  const [logoColor, setLogoColor] = useState('white')
  const whiteLogoPath = ['/']

  useEffect(() => {
    setLogoColor(whiteLogoPath.includes(pathname) ? 'white' : 'black')
  }, [pathname])

  return (
    <main className='Layout'>
      <NavLink className='Logo' to={`/`}>
        {
          logoColor === 'white' ?
            <img className="White" src={LogoInsign} /> :
            <img className="Black"src={LogoInsignLGB}  />
        }
      </NavLink>
      <CartMenu isEmpty={!cartItems} />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Layout
