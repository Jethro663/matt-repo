import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import ElectricityCalculator from './pages/ElectricityCalculator'
import GradeEvaluation from './pages/GradeEvaluation'
import EmployeeAttendanceChecker from './pages/EmployeeAttendanceChecker'
import PasswordStrengthChecker from './pages/PasswordStrengthChecker'
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
      return <GradeEvaluation />
    }

    if (activePage === 'activity3') {
      return <PasswordStrengthChecker />
    }

    if (activePage === 'activity4') {
      return <ElectricityCalculator />
    }

    if (activePage === 'activity5') {
      return <EmployeeAttendanceChecker />
    }

    return (
      <div className="portal-placeholder">
        Select an activity from the navigation.
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