import React from 'react'
import { useTranslation } from 'react-i18next'
import { Search, Plus, Printer, ToggleLeft } from 'lucide-react'

const MainDashboard = () => {
  const { t } = useTranslation()
  return (
    <main className="main-dash">
      <div className="dash-header">
        <div className="search-bars">
          <div className="search-input">
            <Search size={18} />
            <input type="text" placeholder={t('search_article_no')} />
          </div>
          <div className="search-input">
            <Search size={18} />
            <input type="text" placeholder={t('search_product')} />
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn-primary"><Plus size={18} /> {t('button_new_product')}</button>
          <button className="btn-secondary"><Printer size={18} /> {t('button_print_list')}</button>
          <button className="btn-toggle"><ToggleLeft size={18} /> {t('button_advanced_mode')}</button>
        </div>
      </div>

      <div className="table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>{t('table_header_article_no')}</th>
              <th>{t('table_header_product_service')}</th>
              <th>{t('table_header_in_price')}</th>
              <th>{t('table_header_price')}</th>
              <th>{t('table_header_unit')}</th>
              <th>{t('table_header_in_stock')}</th>
              <th>{t('table_header_description')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><div>1234567890</div></td>
              <td><div>This is a test product with fifty characters this!</div></td>
              <td><div>900500</div></td>
              <td><div>1500800</div></td>
              <td><div>kilometers/hour</div></td>
              <td><div>2500600</div></td>
              <td><div>This is the description with fifty characters this! ...</div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default MainDashboard