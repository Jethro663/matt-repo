import React, { useState } from 'react'
import '../styles/GradeEvaluation.css'

export default function GradeEvaluation() {
  const [studentName, setStudentName] = useState('')
  const [scoreInput, setScoreInput] = useState('')
  const [result, setResult] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleEvaluate = (e) => {
    e.preventDefault()
    setErrorMessage('')
    setResult(null)

    if (!studentName.trim() || scoreInput === '') {
      setErrorMessage('Please enter both student name and score.')
      return
    }

    const numericScore = parseFloat(scoreInput)

    if (isNaN(numericScore) || numericScore < 0 || numericScore > 100) {
      setErrorMessage('Invalid score! Please enter a value between 0 and 100.')
      return
    }

    let remarks = ''
    let statusClass = ''

    if (numericScore >= 90) {
      remarks = 'Excellent'
      statusClass = 'excellent'
    } else if (numericScore >= 85) {
      remarks = 'Very Good'
      statusClass = 'very-good'
    } else if (numericScore >= 80) {
      remarks = 'Good'
      statusClass = 'good'
    } else if (numericScore >= 75) {
      remarks = 'Passed'
      statusClass = 'passed'
    } else {
      remarks = 'Failed'
      statusClass = 'failed'
    }

    setResult({
      name: studentName.trim(),
      score: numericScore,
      remarks,
      statusClass,
    })
  }

  const handleClear = () => {
    setStudentName('')
    setScoreInput('')
    setResult(null)
    setErrorMessage('')
  }

  return (
    <div className="grade-eval-container">
      <div className="grade-eval-card">
        <header className="card-header">
          <h2>Student Grade Evaluator</h2>
          <p className="card-subtitle">
            Enter a student's score below to evaluate academic remarks and standing.
          </p>
        </header>

        <form onSubmit={handleEvaluate} className="eval-form">
          <div className="form-group">
            <label htmlFor="studentName">Student Name</label>
            <input
              type="text"
              id="studentName"
              placeholder="e.g. Alex Morgan"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="scoreInput">
              Score <span>(0 – 100)</span>
            </label>
            <input
              type="number"
              id="scoreInput"
              placeholder="e.g. 88"
              value={scoreInput}
              onChange={(e) => setScoreInput(e.target.value)}
            />
          </div>

          {errorMessage && (
            <div className="error-alert">
              {errorMessage}
            </div>
          )}

          <div className="button-group">
            <button type="submit" className="btn btn-primary">
              Evaluate Grade
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClear}
            >
              Reset
            </button>
          </div>
        </form>

        {result && (
          <div className={`result-card ${result.statusClass}`}>
            <div className="result-header">
              <span className="result-title">Evaluation Summary</span>
              <span className={`status-badge ${result.statusClass}`}>
                {result.remarks}
              </span>
            </div>

            <div className="result-body">
              <div className="result-stat">
                <span className="stat-label">Student Name</span>
                <span className="stat-value name-value">{result.name}</span>
              </div>
              <div className="result-stat">
                <span className="stat-label">Final Score</span>
                <span className="stat-value score-value">{result.score} / 100</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}