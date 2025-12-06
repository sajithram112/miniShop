import { X } from 'lucide-react'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const CreateProductPopup = ({ createPopup, close, saveNewProduct,apiloader }) => {
  const { t } = useTranslation()

  const [newProduct, setNewProduct] = useState({
    title: '',
    in_price: '',
    price: '',
    unit: '',
    in_stock: '',
    description: ''
  })

  const updateField = (field, value) => {
    setNewProduct(prev => ({ ...prev, [field]: value }))
  }

  return (
    <>
      {createPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <div className="popup-header">
                <div className='close-icon' onClick={() => close()}><X /></div>
              <h2>{t('button_new_product')}</h2>
            </div>

            <div className="popup-body">
              <div className="input-group">
                <label>{t('table_header_product_service')}</label>
                <input
                    type="text"
                    placeholder={t('table_header_product_service')}
                    value={newProduct.title}
                    onChange={(e) => updateField('title', e.target.value)}
                />
                </div>

                <div className="input-2">
                <div className="input-group">
                    <label>{t('table_header_in_price')}</label>
                    <input
                    type="number"
                    placeholder={t('table_header_in_price')}
                    value={newProduct.in_price}
                    onChange={(e) => updateField('in_price', e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>{t('table_header_price')}</label>
                    <input
                    type="number"
                    placeholder={t('table_header_price')}
                    value={newProduct.price}
                    onChange={(e) => updateField('price', e.target.value)}
                    />
                </div>
                </div>

                <div className="input-group">
                <label>{t('table_header_unit')}</label>
                <input
                    type="text"
                    placeholder={t('table_header_unit')}
                    value={newProduct.unit}
                    onChange={(e) => updateField('unit', e.target.value)}
                />
                </div>

                <div className="input-group">
                <label>{t('table_header_in_stock')}</label>
                <input
                    type="number"
                    placeholder={t('table_header_in_stock')}
                    value={newProduct.in_stock}
                    onChange={(e) => updateField('in_stock', e.target.value)}
                />
                </div>

                <div className="input-group">
                <label>{t('table_header_description')}</label>
                <textarea
                    placeholder={t('table_header_description')}
                    value={newProduct.description}
                    onChange={(e) => updateField('description', e.target.value)}
                />
                </div>

            </div>

            <div className="popup-footer">
              <button className="cancel-btn" onClick={() => close()} disabled={apiloader}>
                Cancel
              </button>
              <button className="save-btn" onClick={() => saveNewProduct(newProduct)} disabled={apiloader}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CreateProductPopup
