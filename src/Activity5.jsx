import { useState } from 'react'

function Activity5() {
  const [employeeName, setEmployeeName] = useState('')
  const [timeIn, setTimeIn] = useState('')
  const [status, setStatus] = useState('')
  const [message, setMessage] = useState('')
  const [feedback, setFeedback] = useState('')

  const handleCheckAttendance = () => {
    const trimmedEmployeeName = employeeName.trim()
    const trimmedTimeIn = timeIn.trim()

    if (!trimmedEmployeeName && !trimmedTimeIn) {
      setStatus('')
      setMessage('')
      setFeedback('Please enter the employee name and time in.')
      return
    }

    if (!trimmedEmployeeName) {
      setStatus('')
      setMessage('')
      setFeedback('Please enter the employee name.')
      return
    }

    if (!trimmedTimeIn) {
      setStatus('')
      setMessage('')
      setFeedback('Please enter the time in.')
      return
    }

    const numericTime = Number(trimmedTimeIn)

    if (!Number.isFinite(numericTime)) {
      setStatus('')
      setMessage('')
      setFeedback('Please enter a valid numeric time.')
      return
    }

    setFeedback('')

    if (numericTime <= 8) {
      setStatus('On Time')
      setMessage('Good job!')
    } else if (numericTime <= 9) {
      setStatus('Late')
      setMessage('Please be on time tomorrow.')
    } else {
      setStatus('Very Late')
      setMessage('Report to your supervisor.')
    }
  }

  const handleReset = () => {
    setEmployeeName('')
    setTimeIn('')
    setStatus('')
    setMessage('')
    setFeedback('')
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Employee Attendance Checker</h2>

        <div style={styles.fieldGroup}>
          <label htmlFor="employee-name" style={styles.label}>
            Employee Name
          </label>
          <input
            id="employee-name"
            type="text"
            value={employeeName}
            onChange={(event) => setEmployeeName(event.target.value)}
            placeholder="Enter employee name"
            style={styles.input}
          />
        </div>

        <div style={styles.fieldGroup}>
          <label htmlFor="time-in" style={styles.label}>
            Time In
          </label>
          <input
            id="time-in"
            type="number"
            step="0.1"
            min="0"
            value={timeIn}
            onChange={(event) => setTimeIn(event.target.value)}
            placeholder="Enter time in (e.g. 8.5)"
            style={styles.input}
          />
        </div>

        <div style={styles.buttons}>
          <button type="button" style={styles.checkButton} onClick={handleCheckAttendance}>
            Check Attendance
          </button>

          <button type="button" style={styles.resetButton} onClick={handleReset}>
            Reset
          </button>
        </div>

        {feedback ? (
          <div role="status" aria-live="polite" style={styles.feedback}>
            {feedback}
          </div>
        ) : null}

        {status ? (
          <div style={styles.result} role="status" aria-live="polite">
            <h3 style={styles.resultTitle}>Attendance Result</h3>
            <p>
              <strong>Employee Name:</strong> {employeeName.trim()}
            </p>
            <p>
              <strong>Time In:</strong> {timeIn}
            </p>
            <p>
              <strong>Attendance Status:</strong> {status}
            </p>
            <p>
              <strong>Follow-up message:</strong> {message}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

const styles = {
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 72px)',
    padding: '2rem 1rem 3rem',
    backgroundColor: '#dbeafe',
    fontFamily: 'Arial, sans-serif',
  },

  card: {
    width: '100%',
    maxWidth: '400px',
    padding: '30px 20px',
    backgroundColor: 'white',
    borderRadius: '18px',
    boxShadow: '0 12px 32px rgba(15, 23, 42, 0.12)',
  },

  title: {
    margin: '0 0 20px',
    textAlign: 'center',
    color: '#1d4ed8',
    fontSize: '1.8rem',
  },

  fieldGroup: {
    marginBottom: '16px',
  },

  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#1f2937',
    fontWeight: '700',
  },

  input: {
    width: '100%',
    padding: '10px 12px',
    boxSizing: 'border-box',
    border: '1px solid #93c5fd',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#0f172a',
    backgroundColor: '#f8fbff',
  },

  buttons: {
    display: 'flex',
    gap: '10px',
    marginTop: '8px',
  },

  checkButton: {
    flex: 1,
    padding: '10px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#2563eb',
    color: 'white',
    cursor: 'pointer',
    fontWeight: '700',
  },

  resetButton: {
    flex: 1,
    padding: '10px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#bfdbfe',
    color: '#1e3a8a',
    cursor: 'pointer',
    fontWeight: '700',
  },

  feedback: {
    marginTop: '18px',
    padding: '12px 14px',
    borderRadius: '8px',
    backgroundColor: '#fee2e2',
    border: '1px solid #fca5a5',
    color: '#991b1b',
    fontWeight: '600',
  },

  result: {
    marginTop: '20px',
    padding: '16px',
    backgroundColor: '#eff6ff',
    borderLeft: '4px solid #2563eb',
    borderRadius: '8px',
    color: '#1f2937',
  },

  resultTitle: {
    margin: '0 0 8px',
  },
}

export default Activity5