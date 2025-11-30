import React, { useEffect, useState } from 'react'
import { 
  FileText, Users, Briefcase, BookOpen, Tag, 
  Receipt, AlertCircle, Gift, Package, DollarSign,
  Upload, LogOut 
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const SideDashboard = () => {

    const [menu, setMenu] = useState([
        { icon: FileText, label: 'Invoices', active: false },
        { icon: Users, label: 'Customers', active: false },
        { icon: Briefcase, label: 'My Business', active: false },
        { icon: BookOpen, label: 'Invoice journal', active: false },
        { icon: Tag, label: 'Price List', active: true },
        { icon: Receipt, label: 'Multiple Invoicing', active: false },
        { icon: AlertCircle, label: 'Unpaid Invoices', active: false },
        { icon: Gift, label: 'Offer', active: false },
        { icon: Package, label: 'Inventory Control', active: false },
        { icon: DollarSign, label: 'Member Invoicing', active: false },
        { icon: Upload, label: 'Import/Export', active: false },
        { icon: LogOut, label: 'Log out', active: false, danger: true },
    ])

    const navigate = useNavigate()

    const handleActive = (item) => {
      if (item.label === 'Log out') {
        localStorage.removeItem('logged')
        navigate('/login')
      }
        console.log(item)
        const menu_data = [...menu]
        const pick = menu_data.find(x => x.label === item.label)
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
              <span>{item.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SideDashboard