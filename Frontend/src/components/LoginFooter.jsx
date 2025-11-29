import React from 'react'
import '../css/footer.css'

const LoginFooter = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-dividend'>
                <div>123 Fakureta</div>
                    <div className='links-container'>
                        <div> Home </div>
                        <div> Order </div>
                        <div> Our Customer </div>
                    </div>
            </div>
            <div className='footer-divider-line'></div>
            <div className='footer-divider'>
                © Lättfaktura, CRO no. 638537, 2025. All rights reserved.
            </div>
        </div>
    </div>
  )
}

export default LoginFooter