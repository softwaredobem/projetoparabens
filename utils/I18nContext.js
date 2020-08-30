import React, { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/router'

const I18nContext = createContext()

const validLangs = ['pt-br', 'en-us']

const extractLang = path => {
  const pathParts = path.split('/')
  if (validLangs.indexOf(pathParts[1]) >= 0) {
    return pathParts[1]
  }
  return validLangs[0]
}

export const I18nContextProvider = ({ children }) => {
  const router = useRouter()
  const currentLang = extractLang(router.pathname)
  return (
    <I18nContext.Provider
      value={{
        currentLang,
      }}
    >
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = translationsFile => {
  const i18n = useContext(I18nContext)

  return {
    currentLang: i18n.currentLang,
    t: key => translationsFile[i18n.currentLang][key],
  }
}
