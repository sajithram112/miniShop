import React, { useState, useEffect, useRef } from 'react'
import { Menu } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import en from '../assets/en.png'
import sv from '../assets/sv.png'
import i18n from '../helper/i18n'

const MainHeader = ({ onMenuToggle = () => {} }) => {
    const { t } = useTranslation()
    const [language, setLanguage] = useState(localStorage.getItem('i18nextLng'))
    const [isLangOpen, setIsLangOpen] = useState(false)
    const langContainerRef = useRef(null)
    const langPopupRef = useRef(null)

    useEffect(() => {
        const saved = localStorage.getItem('i18nextLng')
        console.log(saved)
        if (saved === 'en' || saved === 'sv') setLanguage(saved)
    }, [])

    useEffect(() => {
        if(language) {
            localStorage.setItem('i18nextLng', language)
            i18n.changeLanguage(language)
        }
    }, [language])

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                isLangOpen &&
                langContainerRef.current &&
                !langContainerRef.current.contains(e.target) &&
                langPopupRef.current &&
                !langPopupRef.current.contains(e.target)
            ) {
                setIsLangOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isLangOpen])

    const selectLanguage = (lang) => {
        setLanguage(lang)
        setIsLangOpen(false)
    }

    return (
        <header className="main-header">
            <div className="header-left">
                <div
                    className="menu-btn"
                    onClick={() => typeof onMenuToggle === 'function' && onMenuToggle()}
                    style={{ cursor: 'pointer' }}
                >
                    <Menu size={24} />
                </div>

                <div className="user-info">
                    <img src="/api/placeholder/40/40" alt="User" className="user-avatar" />
                    <div>
                        <div className="user-name">{t('app_title')}</div>
                        <div className="user-company">{t('company_name')}</div>
                    </div>
                </div>
            </div>

            <div className="header-right">
                <div className="language-container" ref={langContainerRef}>
                    <div
                        onClick={() => setIsLangOpen(!isLangOpen)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img
                            src={language === 'en' ? en : sv}
                            alt={t('language_label')}
                            height="32"
                        />
                    </div>

                    {isLangOpen && (
                        <div ref={langPopupRef} className="language-option">
                            <div onClick={() => selectLanguage('en')}>
                                <img src={en} alt={t('language_label')} height="40" />
                            </div>
                            <div onClick={() => selectLanguage('sv')}>
                                <img src={sv} alt={t('language_label')} height="40" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default MainHeader