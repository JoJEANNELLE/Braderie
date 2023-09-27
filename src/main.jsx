import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
} from 'react-router-dom'
import {ParallaxProvider} from 'react-scroll-parallax'

import App from './app.jsx'

import {AppProvider} from '@Contexts'

import './reset.scss'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <ParallaxProvider>
          <App />
        </ParallaxProvider>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
)
