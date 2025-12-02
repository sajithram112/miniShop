import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { 
  FileText, Users, Briefcase, BookOpen, Tag, 
  Receipt, AlertCircle, Gift, Package, DollarSign,
  Upload, LogOut 
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const SideDashboard = () => {

    const { t } = useTranslation()

    const [menu, setMenu] = useState([
      { icon: FileText, key: 'menu_invoices', active: false },
      { icon: Users, key: 'menu_customers', active: false },
      { icon: Briefcase, key: 'menu_my_business', active: false },
      { icon: BookOpen, key: 'menu_invoice_journal', active: false },
      { icon: Tag, key: 'menu_price_list', active: true },
      { icon: Receipt, key: 'menu_multiple_invoicing', active: false },
      { icon: AlertCircle, key: 'menu_unpaid_invoices', active: false },
      { icon: Gift, key: 'menu_offer', active: false },
      { icon: Package, key: 'menu_inventory_control', active: false },
      { icon: DollarSign, key: 'menu_member_invoicing', active: false },
      { icon: Upload, key: 'menu_import_export', active: false },
      { icon: LogOut, key: 'menu_log_out', active: false, danger: true },
    ])

    const navigate = useNavigate()

    const handleActive = (item) => {
      if (item.key === 'menu_log_out') {
        localStorage.removeItem('logged')
        navigate('/login')
      }
        const menu_data = [...menu]
        const pick = menu_data.find(x => x.key === item.key)
        const existingActives = menu_data.filter(x => x.active)
        existingActives.forEach((x) => x.active = false)
        pick.active = true
        setMenu(menu_data)
    }

  return (
    <div className='sidebar'>
      <div className="sidebar-menu">
        {menu.map((item, i) => {
          const Icon = item.icon
          return (
            <div
              key={i}
              onClick={() => handleActive(item)}
              className={`menu-item ${item.active ? 'active' : ''} ${item.danger ? 'danger' : ''}`}
            >
              <Icon size={20} />
              <span>{t(item.key)}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SideDashboard