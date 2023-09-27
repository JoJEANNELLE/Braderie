import React from 'react'
import {string, func} from 'prop-types'

ButtonMain.propTypes = {
  label    : string.isRequired,
  action   : func,
  modifier : string
}

ButtonMain.defaultProps = {
  action   : null,
  modifier : null
}

//Style
import './ButtonMain.scss'

function ButtonMain({label, action, modifier}) {
  return (
    <button className={`ButtonMain ${modifier ? modifier : ''}`}
      onClick={action ? () => action() : null}
    >
      {label}
    </button>
  )
}

export default ButtonMain
