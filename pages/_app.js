import React from 'react'
import '../css/styles.css'
import { I18nContextProvider } from '../utils/I18nContext'

const MyApp = ({ Component, pageProps }) => {
  return (
    <I18nContextProvider>
      <Component {...pageProps} />
    </I18nContextProvider>
  )
}

export default MyApp
