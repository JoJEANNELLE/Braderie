import React, {useEffect, useState} from 'react'
import {string, func, bool} from 'prop-types'

ButtonStates.propTypes = {
  isActive : bool.isRequired,
  action   : func,
  modifier : string
}

ButtonStates.defaultProps = {
  action   : null,
  modifier : null
}

//Style
import './ButtonStates.scss'

function ButtonStates({isActive, action}) {

  return (
    <button className={`ButtonStates ${isActive ? 'Active' : ''}`}
      onClick={action ? () => action() : null}
    >
      <div className='ButtonStates-label ButtonStates-label--first'>Ajouter au panier</div>
      <div className='ButtonStates-label ButtonStates-label--second'>Voir mon panier</div>
    </button>
  )
}

export default ButtonStates
