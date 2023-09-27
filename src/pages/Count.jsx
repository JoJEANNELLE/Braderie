import React, {useEffect, useState} from 'react'
import {func, any} from 'prop-types'
import moment from 'moment-timezone'

//Assets
import CoverHome from '@Assets/shapes/cover/CoverHome.svg'
import LogoInsign from '@Assets/logos/LogoInsign.svg'
import LogoLGB from '@Assets/logos/LogoLGB.svg'

//Components
import TextStream from '@Components/TextStream/TextStream'

Count.propTypes = {
  afterDone     : func.isRequired,
  countDownDate : any.isRequired,
}

function Count({afterDone, countDownDate}) {
  const [counter, setCounter] = useState(null)

  useEffect(() => {
    countdown()
  }, [])

  function countdown() {
    const x = setInterval(function () {
      const now = new Date(moment().tz('Europe/Paris').format()).getTime()

      const distance = countDownDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setCounter({
        days    : days,
        hours   : hours,
        minutes : minutes,
        seconds : seconds,
      })

      if (distance < 0) {
        clearInterval(x)
        afterDone(true)
      }
    }, 1000)
  }

  return (
    <section className='Page'>
      <div className='Count'>
        <div
          className='Welcomer-cover'
          style={{backgroundImage: `url(${CoverHome})`}}
        />

        <img className='Count-logo' src={LogoInsign} />

        <div className='Count-content'>


          <div className='Count-title'>
            <img src={LogoLGB} />
          </div>

          <ul className={`Count-timer ${counter ? 'Active' : ''}`}>
            <li className='Count-timer--numb'>
              {counter?.days ? ('0' + counter?.days).slice(-2) : '00'}
              <span>jours</span>
            </li>
            <li>:</li>
            <li className='Count-timer--numb'>
              {counter?.hours ? ('0' + counter?.hours).slice(-2) : '00'}
              <span>heures</span>
            </li>
            <li>:</li>
            <li className='Count-timer--numb'>
              {counter?.minutes ? ('0' + counter?.minutes).slice(-2) : '00'}
              <span>minutes</span>
            </li>
            <li>:</li>
            <li className='Count-timer--numb'>
              {counter?.seconds ? ('0' + counter?.seconds).slice(-2) : '00'}
              <span>secondes</span>
            </li>
          </ul>
        </div>
      </div>
      <TextStream />
    </section>
  )
}

export default Count
