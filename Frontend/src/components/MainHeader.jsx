import React, { useState, useEffect, useRef } from 'react'
import { Menu } from 'lucide-react'
import en from '../assets/en.png'
import sv from '../assets/sv.png'

const MainHeader = ({ onMenuToggle = () => {} }) => {
    const [language, setLanguage] = useState('en')
    const [isLangOpen, setIsLangOpen] = useState(false)
    const langContainerRef = useRef(null)
    const langPopupRef = useRef(null)

    useEffect(() => {
        const saved = localStorage.getItem('i18nextLng')
        if (saved === 'en' || saved === 'sv') setLanguage(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('i18nextLng', language)
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
                        <div className="user-name">John Andre</div>
                        <div className="user-company">Storfjord AS</div>
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
                            alt={language === 'en' ? 'English' : 'Svenska'}
                            height="32"
                        />
                    </div>

                    {isLangOpen && (
                        <div ref={langPopupRef} className="language-option">
                            <div onClick={() => selectLanguage('en')}>
                                <img src={en} alt="English" height="40" />
                            </div>
                            <div onClick={() => selectLanguage('sv')}>
                                <img src={sv} alt="Svenska" height="40" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default MainHeader