import { useState } from 'react'
import '../styles/Login.css'

const VALID_USERNAME = 'admin'
const VALID_PASSWORD = 'react123'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const resetFeedback = () => {
    setMessage('')
    setMessageType('')
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value.slice(0, 30))
    if (message) {
      resetFeedback()
    }
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value.slice(0, 50))
    if (message) {
      resetFeedback()
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedUsername = username.trim()
    const trimmedPassword = password.trim()

    if (!trimmedUsername && !trimmedPassword) {
      setMessage('Please enter username and password.')
      setMessageType('error')
      return
    }

    if (!trimmedUsername) {
      setMessage('Please enter your username.')
      setMessageType('error')
      return
    }

    if (!trimmedPassword) {
      setMessage('Please enter your password.')
      setMessageType('error')
      return
    }

    if (trimmedUsername === VALID_USERNAME && trimmedPassword === VALID_PASSWORD) {
      setMessage('Login successful!')
      setMessageType('success')
      setIsLoggedIn(true)
      setPassword('')
      return
    }

    setMessage('Invalid username or password.')
    setMessageType('error')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUsername('')
    setPassword('')
    setShowPassword(false)
    resetFeedback()
  }

  if (isLoggedIn) {
    return (
      <section className="login-page">
        <div className="login-card login-result">
          <p className="login-success-label">Login successful!</p>
          <h2>Welcome, admin!</h2>
          <button type="button" className="login-button logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="login-page">
      <div className="login-card">
        <p className="login-demo-account">Demo account: admin / react123</p>
        <h1>Login Authentication</h1>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-field">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              autoComplete="username"
              maxLength={30}
              onChange={handleUsernameChange}
              placeholder="Enter username"
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>
            <div className="login-password-row">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                autoComplete="current-password"
                maxLength={50}
                onChange={handlePasswordChange}
                placeholder="Enter password"
              />
              <button
                type="button"
                className="login-toggle-password"
                onClick={() => setShowPassword((prevState) => !prevState)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        {message ? (
          <p className={`login-feedback ${messageType}`} aria-live="polite">
            {message}
          </p>
        ) : null}
      </div>
    </section>
  )
}

export default Login
