import { useState } from 'react'
import '../styles/ElectricityCalculator.css'

function ElectricityCalculator() {
  const [customerName, setCustomerName] = useState('')
  const [consumption, setConsumption] = useState('')
  const [result, setResult] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleCustomerNameChange = (e) => {
    setCustomerName(e.target.value)
    if (errorMessage) setErrorMessage('')
  }

  const handleConsumptionChange = (e) => {
    setConsumption(e.target.value)
    if (errorMessage) setErrorMessage('')
  }

  const handleCalculate = (e) => {
    e.preventDefault()

    const name = customerName.trim()
    const kWh = parseFloat(consumption)

    if (!name) {
      setErrorMessage('Please enter the customer name.')
      setResult(null)
      return
    }

    if (consumption === '' || isNaN(kWh) || kWh < 0) {
      setErrorMessage('Please enter a valid positive kWh consumption.')
      setResult(null)
      return
    }

    let rate
    if (kWh <= 100) {
      rate = 10
    } else if (kWh <= 200) {
      rate = 12
    } else if (kWh <= 300) {
      rate = 15
    } else {
      rate = 18
    }

    const totalBill = kWh * rate
    const isHighUsage = totalBill >= 5000
    const usageStatus = isHighUsage ? 'High Electricity Usage' : 'Normal Electricity Usage'

    setErrorMessage('')
    setResult({
      customerName: name,
      consumption: kWh,
      rateApplied: rate,
      totalBill: totalBill,
      usageStatus: usageStatus,
      isHighUsage: isHighUsage,
    })
  }

  const handleClear = () => {
    setCustomerName('')
    setConsumption('')
    setResult(null)
    setErrorMessage('')
  }

  return (
    <section className="calc-container">
      <div className="calc-bg-decorations" aria-hidden="true">
        <svg className="calc-bg-icon calc-bg-icon--lightning-1" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
        <svg className="calc-bg-icon calc-bg-icon--bulb" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.8 3 6.5.8.9 1 1.5 1 2.5h6c0-1 .2-1.6 1-2.5 1.5-1.7 3-4 3-6.5a7 7 0 0 0-7-7z" />
        </svg>
        <svg className="calc-bg-icon calc-bg-icon--plug" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v6M7 4v4M17 4v4M5 8h14a2 2 0 0 1 2 2v3a7 7 0 0 1-14 0v-3a2 2 0 0 1 2-2zM12 17v5" />
        </svg>
        <svg className="calc-bg-icon calc-bg-icon--battery" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="6" width="16" height="12" rx="2" />
          <path d="M22 10v4M10 9l-2 3h3l-1 3" />
        </svg>
        <svg className="calc-bg-icon calc-bg-icon--pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
        <svg className="calc-bg-icon calc-bg-icon--lightning-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 15H6l7-11v5h5l-7 11v-5z" />
        </svg>
      </div>

      <header className="calc-header">

        <div className="calc-header__text">
          <h1>Electricity Bill Calculator</h1>
        </div>
      </header>

      <div className="calc-grid">
        <div className="calc-card calc-card--inputs">
          <h2 className="calc-card__title calc-card__title--teal">INPUTS &amp; BUTTONS</h2>

          <form onSubmit={handleCalculate} className="calc-form">
            <div className="calc-field">
              <label htmlFor="customerName" className="calc-label">
                <span className="calc-bullet">•</span> Customer Name input
              </label>
              <input
                id="customerName"
                type="text"
                className="calc-input"
                placeholder="e.g. Juan Dela Cruz"
                value={customerName}
                onChange={handleCustomerNameChange}
              />
            </div>

            <div className="calc-field">
              <label htmlFor="consumption" className="calc-label">
                <span className="calc-bullet">•</span> Consumption (kWh) input
              </label>
              <input
                id="consumption"
                type="number"
                min="0"
                step="any"
                className="calc-input"
                placeholder="e.g. 250"
                value={consumption}
                onChange={handleConsumptionChange}
              />
            </div>

            {errorMessage ? (
              <p className="calc-error" aria-live="polite">
                {errorMessage}
              </p>
            ) : null}

            <div className="calc-buttons">
              <button
                type="submit"
                className="calc-btn calc-btn--primary"
                onClick={handleCalculate}
              >
                Calculate Bill button
              </button>
              <button
                type="button"
                className="calc-btn calc-btn--secondary"
                onClick={handleClear}
              >
                Clear button
              </button>
            </div>
          </form>
        </div>

        <div className="calc-card calc-card--conditions">
          <h2 className="calc-card__title calc-card__title--teal">CONDITIONS</h2>

          <ul className="calc-conditions-list">
            <li className="calc-condition-item">
              <span className="calc-condition-range">0 – 100 kWh</span>
              <span className="calc-condition-arrow">→</span>
              <span className="calc-condition-rate">₱10 per kWh</span>
            </li>
            <li className="calc-condition-item">
              <span className="calc-condition-range">101 – 200 kWh</span>
              <span className="calc-condition-arrow">→</span>
              <span className="calc-condition-rate">₱12 per kWh</span>
            </li>
            <li className="calc-condition-item">
              <span className="calc-condition-range">201 – 300 kWh</span>
              <span className="calc-condition-arrow">→</span>
              <span className="calc-condition-rate">₱15 per kWh</span>
            </li>
            <li className="calc-condition-item">
              <span className="calc-condition-range">Above 300 kWh</span>
              <span className="calc-condition-arrow">→</span>
              <span className="calc-condition-rate">₱18 per kWh</span>
            </li>
          </ul>

          <div className="calc-status-conditions">
            <div className="calc-status-rule">
              <span className="calc-status-rule__cond">Bill ≥ ₱5,000</span>
              <span className="calc-condition-arrow">→</span>
              <span className="calc-status-rule__badge calc-status-rule__badge--high">
                High Electricity Usage
              </span>
            </div>
            <div className="calc-status-rule">
              <span className="calc-status-rule__cond">Bill &lt; ₱5,000</span>
              <span className="calc-condition-arrow">→</span>
              <span className="calc-status-rule__badge calc-status-rule__badge--normal">
                Normal Electricity Usage
              </span>
            </div>
          </div>
        </div>

        <div className="calc-card calc-card--results">
          <h2 className="calc-card__title calc-card__title--light">RESULT PANEL SHOWS</h2>

          {result ? (
            <div className="calc-results-body">
              <div className="calc-result-row">
                <span className="calc-result-arrow">›</span>
                <span className="calc-result-label">Customer Name:</span>
                <span className="calc-result-val calc-result-val--name">
                  {result.customerName}
                </span>
              </div>

              <div className="calc-result-row">
                <span className="calc-result-arrow">›</span>
                <span className="calc-result-label">Consumption:</span>
                <span className="calc-result-val">
                  {result.consumption.toLocaleString()} kWh
                </span>
              </div>

              <div className="calc-result-row">
                <span className="calc-result-arrow">›</span>
                <span className="calc-result-label">Rate Applied:</span>
                <span className="calc-result-val">₱{result.rateApplied} per kWh</span>
              </div>

              <div className="calc-result-row calc-result-row--highlight">
                <span className="calc-result-arrow">›</span>
                <span className="calc-result-label">Total Bill:</span>
                <span className="calc-result-val calc-result-val--total">
                  ₱
                  {result.totalBill.toLocaleString('en-PH', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>

              <div className="calc-result-row">
                <span className="calc-result-arrow">›</span>
                <span className="calc-result-label">Usage Status:</span>
                <span
                  className={`calc-status-pill ${
                    result.isHighUsage ? 'calc-status-pill--high' : 'calc-status-pill--normal'
                  }`}
                >
                  {result.usageStatus}
                </span>
              </div>
            </div>
          ) : (
            <div className="calc-results-empty">
              <div className="calc-empty-icon">⚡</div>
              <p className="calc-empty-text">
                Enter details and click <strong>Calculate Bill</strong> to view summary.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ElectricityCalculator
