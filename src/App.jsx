import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import ElectricityCalculator from './pages/ElectricityCalculator'
import Activity5 from './Activity5'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('home')

  const renderPage = () => {
    if (activePage === 'home') {
      return <Home onStartActivity1={() => setActivePage('activity1')} />
    }

    if (activePage === 'activity1') {
      return <Login />
    }

    if (activePage === 'activity2') {
      return (
        <div className="portal-placeholder">
          Activity 2 will be added by another team member.
        </div>
      )
    }

    if (activePage === 'activity3') {
      return (
        <div className="portal-placeholder">
          Activity 3 will be added by another team member.
        </div>
      )
    }

    if (activePage === 'activity4') {
      return <ElectricityCalculator />
    }

    if (activePage === 'activity5') {
      return <Activity5 />
    }

    return (
      <div className="portal-placeholder">
        Activity 5 will be added by another team member.
      </div>
    )
  }

  return (
    <div className="app-shell">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="app-main">{renderPage()}</main>
    </div>
  )
}

export default App