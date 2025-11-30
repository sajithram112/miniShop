import { useEffect, useRef, useState } from 'react'
import MainHeader from '../components/MainHeader'
import SideDashboard from '../components/SideDashboard'
import MainDashboard from '../components/MainDashboard'
import '../css/dash.css'

const HomeDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(null)
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const windowWidth = useRef(window.innerWidth)
    useEffect(() => {
        setSidebarOpen(window.innerWidth > 991)
        addMenuClass(window.innerWidth > 991)
  const handleResize = () => {
    console.log(window.innerWidth, windowWidth.current)

    if (window.innerWidth <= 991 && windowWidth.current > 991) {
      onMenuToggle('false')
      windowWidth.current = window.innerWidth
    } 
    else if (window.innerWidth > 991 && windowWidth.current <= 991) {
      onMenuToggle('true')
      windowWidth.current = window.innerWidth
    }
  }

  window.addEventListener('resize', handleResize)
  return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleResize = () => {
        console.log(window.innerWidth, windowWidth, window.innerWidth > 991 && windowWidth <= 991)
        if (window.innerWidth <= 991 && windowWidth > 991) {
            onMenuToggle('false')
            setWindowWidth(window.innerWidth)
        } else if (window.innerWidth > 991 && windowWidth <= 991)  {
            console.log('man whats this')
            onMenuToggle('true')
            setWindowWidth(window.innerWidth)
        }
    }

    const onMenuToggle = (bool) => {
        if(bool && bool === 'true') {
            setSidebarOpen(true)
            addMenuClass(true)
        } else if (bool && bool === 'false') {
            setSidebarOpen(false)
            addMenuClass(false)
        } else {
            addMenuClass(!sidebarOpen)
            setSidebarOpen(!sidebarOpen)
        }
    }

    const addMenuClass = (bool) => {
        if (bool) {
            document.querySelector('.sidebar').classList.add('open')
            document.querySelector('.main-dash').classList.remove('full')
        } else {
            document.querySelector('.sidebar').classList.remove('open')
            document.querySelector('.main-dash').classList.add('full')
        }
    }

    return (
        <div className="dashboard-layout">
            <MainHeader
                onMenuToggle={(bool) => onMenuToggle(bool)}
                isSidebarOpen={sidebarOpen}
            />
            <div className="dashboard-body">
                <SideDashboard />
                <MainDashboard />
            </div>
        </div>
    )
}

export default HomeDashboard