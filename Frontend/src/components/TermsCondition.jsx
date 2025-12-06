import React from 'react';
import '../css/terms-condition.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const TermsCondition = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
const terms = [
  'terms_intro',
  'terms_trial_period',
  'terms_support',
  'terms_pricing_and_cancellation',
  'terms_no_cancel_after_14',
  'terms_registration_time',
  'terms_billing_cycle',
  'terms_special_price',
  'terms_special_period',
  'terms_vat',
  'terms_addons',
  'terms_billing_company',
  'terms_renewal',
  'terms_price_after_first_year',
  'terms_payment_obligation',
  'terms_logo_help',
  'terms_license',
  'terms_data_storage_intro',
  'terms_gdpr_intro',
  'terms_right_of_withdrawal',
  'terms_data_usage',
  'terms_opt_out',
  'terms_data_processing_consent',
  'terms_your_rights',
  'terms_voluntary',
  'terms_contact',
  'terms_final_call',
  'terms_closing'
]

  return (
    <div className='total-container'>
      <div className='terms-title'>{t('terms_modal_title')}</div>
        <div>
            <button onClick={() => navigate(-1)}>{t('terms_modal_close')}</button>
        </div>
        <div className="terms-condition-container">
            <div className="terms-content">
                {terms.map((section, index) => (
                <section key={index} className="terms-section">
                    {/* <h2 className="terms-head">{t(section.head)}</h2> */}
                    {/* <div className="terms-body"> */}
                    {/* {section.content.map((key, i) => ( */}
                        <p className="terms-paragraph">
                        {t(section)}
                        </p>
                    {/* ))} */}
                    {/* </div> */}
                </section>
                ))}
            </div>
        </div>
        <div>
            <button onClick={() => navigate(-1)}>{t('terms_modal_close')}</button>
        </div>
    </div>
  );
};

export default TermsCondition;