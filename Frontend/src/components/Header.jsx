
import React, { useEffect, useState } from 'react'
import diamond from '../assets/diamond.png'
import en from '../assets/en.png'
import sv from '../assets/sv.png'
import { Menu } from 'lucide-react'
import '../css/header.css'

const Header = () => {

  const [language, setLanguage] = useState(null)
  const [langSetting, setLangSettings] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const languagePopupRef = React.useRef(null)
  const languagecontainerRef = React.useRef(null)

  useEffect(() => {
    document.addEventListener('mousedown', checkClickOutside)
    document.addEventListener('resize', menuHandler)
    return () => document.removeEventListener('mousedown', checkClickOutside)
  }, [])

  useEffect(() => {
    if (!language) {
      console.log(' emtru')
      localStorage.setItem('i18nextLng', 'en')
      setLanguage('en')
    } else localStorage.setItem('i18nextLng', language)
  }, [language])

  const checkClickOutside = (e) => {
    console.log(langSetting, languagePopupRef?.current, !languagePopupRef?.current?.contains(e.target))
    if (languagecontainerRef?.current && !languagecontainerRef?.current.contains(e.target) && languagePopupRef?.current && !languagePopupRef?.current?.contains(e.target)) {
      setLangSettings(false)
    }
  }

  const menuHandler = () => {
    if (window.innerWidth < '991p' && width >='991') {
      setWidth(window.innerWidth)
      document.removeEventListener
    }
  }
  const languageSet = (lang) => {
    setLanguage(lang)
    setLangSettings(false)
  }

  return (
    <div className='header'>
      <div className='header-container'>
        {width >= 991
          ? (
            <>
              <div className='logo_container'>
                  <img src={diamond} alt='diamond' height='50px'/>
              </div>
              <div className='links-container'>
                <div> Home </div>
                <div> Order </div>
                <div> Our Customer </div>
                <div> About Us </div>
                <div> Contact Us </div>
                <div className='language-container'>
                  <div className='' onClick={() => setLangSettings(!langSetting)} ref={languagecontainerRef}>
                    {language === 'en' && (
                      <img src={en} alt='english' height='50px' />
                    )}
                    {language === 'sv' && (
                      <img src={sv} alt='sveneka' height='50px' />
                    )}
                  </div>
                  {langSetting && (
                    <div ref={languagePopupRef} className='language-option'>
                      <div onClick={() => languageSet('en')}><img src={en} alt='english' height='50px' /></div>
                      <div onClick={() => languageSet('sv')}><img src={sv} alt='sveneka' height='50px' /></div>
                    </div>
                  )}
                </div>
              </div>
            </>
            )
          : (
              <>
                <div><Menu /></div>
                <div className='links-container'>
                  <div className='language-container'>
                    <div className='' onClick={() => setLangSettings(!langSetting)} ref={languagecontainerRef}>
                      {language === 'en' && (
                        <img src={en} alt='english' height='50px' />
                      )}
                      {language === 'sv' && (
                        <img src={sv} alt='sveneka' height='50px' />
                      )}
                    </div>
                    {langSetting && (
                      <div ref={languagePopupRef} className='language-option'>
                        <div onClick={() => languageSet('en')}><img src={en} alt='english' height='50px' /></div>
                        <div onClick={() => languageSet('sv')}><img src={sv} alt='sveneka' height='50px' /></div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
      </div>
    </div>
  )
}

export default Header