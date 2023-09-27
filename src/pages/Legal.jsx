import React, {useEffect, useState} from 'react'
import {func} from 'prop-types'
import {request} from '@Datocms'
import {StructuredText} from 'react-datocms'

//Queries
import {getLegal} from '@Queries'

//Components
import PageTitle from '@Components/PageTitle/PageTitle'

Legal.propTypes = {
  ready : func.isRequired,
}

function Legal({ready}) {
  const [content, setContent] = useState([])

  useEffect(() => {
    fetchContent()
  }, [])

  async function fetchContent() {
    let resp = null
  
    try {
      resp = await request({
        query : getLegal(),
      })
    } catch (e) {
      console.log(e)
    }

    setContent(resp.legal)
    ready()
  }

  return (
    <div className='Page Page--header Page--footer'>
      <PageTitle title={content?.title || ' '} />
      <div className='Wrapper'>
        <div className='Edito'>
          <StructuredText data={content.content} />
        </div>
      </div>
    </div>
  )
}

export default Legal
