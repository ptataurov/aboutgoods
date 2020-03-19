import React from 'react'
import '../styles.scss'
import AppState from '../context/app/app-state'

const App = ({ Component, pageProps }) => {
  return (
    <AppState>
      <Component {...pageProps} />
    </AppState>
  )
}

export default App
