import React, { useState } from 'react'
import './PasswordStrengthChecker.css'

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)
  const [statusText, setStatusText] = useState('')
  const [strengthText, setStrengthText] = useState('')
  const [level, setLevel] = useState('none')

  const handleCheck = () => {
    const pwd = password

    if (pwd.length === 0) {
      setStatusText('Please enter a password.')
      setStrengthText('')
      setLevel('empty')
      setVisible(true)
      return
    }

    if (!/^[A-Za-z0-9]+$/.test(pwd)) {
      setStatusText('Password cannot contain special characters.')
      setStrengthText('')
      setLevel('invalid')
      setVisible(true)
      return
    }

    if (pwd.length < 6) {
      setLevel('weak')
      setStrengthText('Weak Password')
      setStatusText('Status: Weak – Create a stronger password.')
    } else if (pwd.length <= 9) {
      setLevel('medium')
      setStrengthText('Medium Password')
      setStatusText('Status: Medium – Better, but can be stronger.')
    } else {
      setLevel('strong')
      setStrengthText('Strong Password')
      setStatusText('Status: Strong – You can use this password.')
    }

    setVisible(true)
  }

  const handleClear = () => {
    setPassword('')
    setVisible(false)
    setStatusText('')
    setStrengthText('')
    setLevel('none')
  }

  return (
    <main className="psc-page">
      <div className="psc-shell">
        <h1 className="psc-title">Password Strength Checker</h1>

        <section className="psc-card">
          <label className="psc-label" htmlFor="passwordInput">
            Password:
          </label>
          <input
            id="passwordInput"
            className="psc-input"
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
          />

          <div className="psc-actions">
            <button className="psc-btn psc-btn-primary" onClick={handleCheck}>
              Check Password
            </button>
            <button className="psc-btn psc-btn-secondary" onClick={handleClear}>
              Clear
            </button>
          </div>
        </section>

        <section className={`psc-status-window ${visible ? level : 'idle'}`}>
          {visible ? (
            <>
              <div className="psc-status-icon">⚡</div>

              <p className="psc-status-text">{statusText}</p>
              {strengthText && <p className="psc-strength-text">{strengthText}</p>}

              <div className="psc-meter">
                <span className={`psc-meter-segment ${level === 'weak' ? 'active weak' : ''}`}>Weak</span>
                <span className={`psc-meter-segment ${level === 'medium' ? 'active medium' : ''}`}>Medium</span>
                <span className={`psc-meter-segment ${level === 'strong' ? 'active strong' : ''}`}>Strong</span>
              </div>
            </>
          ) : (
            <>
              <div className="psc-status-icon idle">⚡</div>
              <p>Enter password and click Check Password to view status.</p>
            </>
          )}
        </section>
      </div>
    </main>
  )
}
