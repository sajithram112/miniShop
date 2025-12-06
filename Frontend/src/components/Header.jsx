import React, { useEffect, useState, useRef } from 'react'
import diamond from '../assets/diamond.png'
import en from '../assets/en.png'
import sv from '../assets/sv.png'
import { Menu, Home, ShoppingCart, Users, Info, Phone } from 'lucide-react'
import '../css/header.css'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import i18n from '../helper/i18n'

const Header = () => {
  const [language, setLanguage] = useState(null)
  const { t } = useTranslation()
  const [langSetting, setLangSettings] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  const navigate = useNavigate()
  const languagePopupRef = useRef(null)
  const languageContainerRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const hamburgerRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        langSetting &&
        languageContainerRef.current &&
        !languageContainerRef.current.contains(e.target) &&
        languagePopupRef.current &&
        !languagePopupRef.current.contains(e.target)
      ) {
        setLangSettings(false)
      }

      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [langSetting, mobileMenuOpen])

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth
      setWidth(newWidth)
      document.querySelector('.header-container')?.classList.toggle('mob-view', newWidth < 991)
      if (newWidth >= 991) setMobileMenuOpen(false)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (width < 991) setLangSettings(false)
  }, [width])

  useEffect(() => {
    const saved = localStorage.getItem('i18nextLng') || 'en'
    setLanguage(saved)
  }, [])

  useEffect(() => {
    if (language) {
      localStorage.setItem('i18nextLng', language)
      i18n.changeLanguage(language)
    }
  }, [language])

  const languageSet = (lang) => {
    setLanguage(lang)

    setLangSettings(false)
  }

  const navto = (nav) => {
    setMobileMenuOpen(false)
    navigate(nav)
  }
  return (
    <div className="header">
      <div className="header-container">
        {width >= 991 ? (
          <>
            <div className="logo_container">
              <img src={diamond} alt="logo" height="50px" />
            </div>

              <div className="links-container">
              <div onClick={() => navigate('/home')}>{t('menu_home')}</div>
              <div>{t('menu_order')}</div>
              <div>{t('menu_our_customers')}</div>
              <div>{t('menu_about_us')}</div>
              <div>{t('menu_contact_us')}</div>

              <div className="language-container">
                <div onClick={() => setLangSettings(!langSetting)} ref={languageContainerRef}>
                  {String(language).includes('en') ? <img src={en} alt="EN" height="50px" /> : <img src={sv} alt="SV" height="50px" />}
                </div>

                {langSetting && (
                  <div ref={languagePopupRef} className="language-option">
                    <div onClick={() => languageSet('en')}><img src={en} alt="EN" height="50px" /></div>
                    <div onClick={() => languageSet('sv')}><img src={sv} alt="SV" height="50px" /></div>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="menu-holder">
              <div
                ref={hamburgerRef}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{ cursor: 'pointer' }}
              >
                <Menu size={28} />
              </div>

              {mobileMenuOpen && (
                <div ref={mobileMenuRef} className="links-container mobile-menu">
                  <div onClick={() => navto('/home')}><Home size={16} /> {t('menu_home')}</div>
                  <div onClick={() => setMobileMenuOpen(false)}><ShoppingCart size={16} /> {t('menu_order')}</div>
                  <div onClick={() => setMobileMenuOpen(false)}><Users size={16} /> {t('menu_our_customers')}</div>
                  <div onClick={() => setMobileMenuOpen(false)}><Info size={16} /> {t('menu_about_us')}</div>
                  <div onClick={() => setMobileMenuOpen(false)}><Phone size={16} /> {t('menu_contact_us')}</div>
                </div>
              )}
            </div>

            <div className="language-container" style={{ marginLeft: 'auto' }}>
              <div onClick={() => setLangSettings(!langSetting)} ref={languageContainerRef}>
                {String(language).includes('en') ? <img src={en} alt="EN" height="40px" /> : <img src={sv} alt="SV" height="40px" />}
              </div>

              {langSetting && (
                <div ref={languagePopupRef} className="language-option">
                  <div onClick={() => languageSet('en')}><img src={en} alt="EN" height="50px" /></div>
                  <div onClick={() => languageSet('sv')}><img src={sv} alt="SV" height="50px" /></div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Header