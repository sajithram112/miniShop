import React from 'react'
import { useTranslation } from 'react-i18next'
import '../css/footer.css'

const LoginFooter = () => {
    const { t } = useTranslation()
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-dividend'>
                <div>{t('footer_company_name')}</div>
                    <div className='links-container'>
                        <div>{t('menu_home')}</div>
                        <div>{t('menu_order')}</div>
                        <div>{t('menu_our_customers')}</div>
                    </div>
            </div>
            <div className='footer-divider-line'></div>
            <div className='footer-divider'>
                © Lättfaktura, CRO no. 638537, 2025. {t('footer_rights')}
            </div>
        </div>
    </div>
  )
}

export default LoginFooter