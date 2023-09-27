import React from 'react'
import {NavLink} from 'react-router-dom'
import {bool} from 'prop-types'

//Assets
import Cart from '@Assets/icons/Cart.svg'

//Style
import './CartMenu.scss'

CartMenu.propTypes = {
  isEmpty : bool.isRequired,
}

function CartMenu({isEmpty}) {
  return (
    <NavLink
      className='CartMenu'
      to={`/cart`}
    >
      <div className='CartMenu-content'>
        <div className={`CartMenu-icon ${isEmpty ? '' : 'Active'}`}>
          <img src={Cart} />
        </div>
      </div>
    </NavLink>
  )
}

export default CartMenu
