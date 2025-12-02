import React from 'react';
import '../css/terms-condition.css';
import { useTranslation } from 'react-i18next';

const TermsCondition = () => {
  const { t } = useTranslation();

  const terms = [
    {
      head: "invoice_now_button",
      content: [
        "terms_intro",
        "registration_definition",
        "registration_timestamp"
      ]
    },
    {
      head: "free_trial_period",
      content: [
        "free_trial_period",
        "support_info",
        "cancel_trial_how",
        "cancel_free",
        "no_cancellation_after_14"
      ]
    },
    {
      head: "subscription_price",
      content: [
        "subscription_price",
        "introductory_offer",
        "price_details",
        "offer_period_calc",
        "price_after_first_year",
        "default_after_year",
        "billing_cycle",
        "continuous_subscription",
        "vat_note"
      ]
    },
    {
      head: "payment_acceptance",
      content: [
        "payment_acceptance",
        "no_cancel_late_payment",
        "payment_to_invoice_sender",
        "invoicing_company",
        "additional_modules",
        "logo_help",
        "license_legal"
      ]
    },
    {
      head: "data_storage_reason",
      content: [
        "data_storage_reason",
        "private_person_cancellation",
        "data_usage",
        "data_processing_permission",
        "broad_data_permission",
        "marketing_permission",
        "opt_out_marketing",
        "unsubscribe_upgrades"
      ]
    },
    {
      head: "gdpr_rights",
      content: [
        "gdpr_rights",
        "no_profiling",
        "contact_info"
      ]
    },
    {
      head: "governing_law",
      content: [
        "governing_law",
        "voluntary_order"
      ]
    },
    {
      head: "closing_message",
      content: ["closing_message"]
    }
  ];

  return (
    <div className='total-container'>
        <div>
            <button onClick={window.close}>Close and Go back</button>
        </div>
        <div className="terms-condition-container">
            <div className="terms-content">
                {terms.map((section, index) => (
                <section key={index} className="terms-section">
                    <h2 className="terms-head">{t(section.head)}</h2>
                    <div className="terms-body">
                    {section.content.map((key, i) => (
                        <p key={i} className="terms-paragraph">
                        {t(key)}
                        </p>
                    ))}
                    </div>
                </section>
                ))}
            </div>
        </div>
        <div>
            <button onClick={window.close}>Close and Go back</button>
        </div>
    </div>
  );
};

export default TermsCondition;