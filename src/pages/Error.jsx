import React, {useEffect} from 'react'
import {func} from 'prop-types'

//Components
import ErrorBloc from '@Components/ErrorBloc/ErrorBloc'

Error.propTypes = {
  ready : func.isRequired,
}

function Error({ready}) {

  useEffect(() => {
    ready()
  }, [])

  return (
    <section className='Page Page--header'>
      <ErrorBloc />
    </section>
  )
}

export default Error
