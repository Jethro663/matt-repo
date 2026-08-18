import { useState } from 'react'

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
    <>
      <style>{`
        .psc-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          padding: 32px 20px;
          box-sizing: border-box;
        }

        .psc-shell {
          width: min(780px, 100%);
        }

        .psc-title {
          margin: 0 0 24px;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          letter-spacing: -0.08em;
          color: #0b1d2a;
        }

        .psc-card {
          background: #f6f7f8;
          border: 1px solid #e3e7ea;
          border-radius: 20px;
          padding: 28px 24px 18px;
          margin-bottom: 24px;
        }

        .psc-label {
          display: block;
          margin-bottom: 12px;
          font-size: 1.1rem;
          font-weight: 700;
          color: #1b2f3d;
        }

        .psc-input {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid #d9e1e6;
          background: #ffffff;
          border-radius: 12px;
          padding: 16px 18px;
          font-size: 1.05rem;
          color: #1c2c35;
          outline: none;
        }

        .psc-input:focus {
          border-color: #3ab7b0;
          box-shadow: 0 0 0 3px rgba(58, 183, 176, 0.1);
        }

        .psc-actions {
          display: flex;
          gap: 12px;
          margin-top: 22px;
        }

        .psc-btn {
          flex: 1;
          border: none;
          border-radius: 14px;
          padding: 16px 12px;
          font-size: 1.05rem;
          font-weight: 800;
          cursor: pointer;
        }

        .psc-btn:hover {
          transform: translateY(-1px);
        }

        .psc-btn-primary {
          background: #2bb7af;
          color: #ffffff;
          box-shadow: 0 8px 16px rgba(43, 183, 175, 0.18);
        }

        .psc-btn-secondary {
          background: #ffffff;
          color: #1b2f3d;
          border: 1px solid #dae1e5;
        }

        .psc-status-window {
          background: #f3f6f8;
          border: 1px solid #e1e5e8;
          border-radius: 20px;
          padding: 28px 22px 22px;
          text-align: center;
          color: #112a39;
        }

        .psc-status-window.idle {
          background: #ffffff;
          border: 1px dashed #dfe7ec;
        }

        .psc-status-icon {
          margin: 0 auto 16px;
          font-size: clamp(3rem, 5vw, 4.5rem);
          line-height: 1;
          color: #f2a23d;
          transform: rotate(10deg);
        }

        .psc-status-window p {
          margin: 0;
          line-height: 1.4;
        }

        .psc-status-text {
          font-size: clamp(1.1rem, 2vw, 1.7rem);
          font-weight: 800;
          color: #102b39;
        }

        .psc-strength-text {
          margin-top: 10px !important;
          font-size: clamp(1.6rem, 2.8vw, 2.7rem);
          font-weight: 900;
          color: #1bb59e;
        }

        .psc-meter {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          margin-top: 20px;
        }

        .psc-meter-segment {
          background: #dfe9ee;
          color: #203748;
          border-radius: 12px;
          padding: 14px 10px;
          font-weight: 800;
          border: 1px solid #d5dde3;
        }

        .psc-meter-segment.active.weak {
          background: #ef8a6a;
          border-color: #e77d5b;
          color: #fff;
        }

        .psc-meter-segment.active.medium {
          background: #f0b14a;
          border-color: #e6a63a;
          color: #fff;
        }

        .psc-meter-segment.active.strong {
          background: #2bc77a;
          border-color: #20b96f;
          color: #fff;
        }

        @media (max-width: 620px) {
          .psc-actions {
            flex-direction: column;
          }

          .psc-card,
          .psc-status-window {
            padding-left: 18px;
            padding-right: 18px;
          }
        }
      `}</style>

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
              <button
                className="psc-btn psc-btn-primary"
                onClick={handleCheck}
              >
                Check Password
              </button>

              <button
                className="psc-btn psc-btn-secondary"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          </section>

          <section
            className={`psc-status-window ${visible ? level : 'idle'}`}
          >
            {visible ? (
              <>
                <div className="psc-status-icon">⚡</div>

                <p className="psc-status-text">{statusText}</p>

                {strengthText && (
                  <p className="psc-strength-text">{strengthText}</p>
                )}

                <div className="psc-meter">
                  <span
                    className={`psc-meter-segment ${
                      level === 'weak' ? 'active weak' : ''
                    }`}
                  >
                    Weak
                  </span>

                  <span
                    className={`psc-meter-segment ${
                      level === 'medium' ? 'active medium' : ''
                    }`}
                  >
                    Medium
                  </span>

                  <span
                    className={`psc-meter-segment ${
                      level === 'strong' ? 'active strong' : ''
                    }`}
                  >
                    Strong
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="psc-status-icon">⚡</div>

                <p>
                  Enter password and click Check Password to view status.
                </p>
              </>
            )}
          </section>
        </div>
      </main>
    </>
  )
}