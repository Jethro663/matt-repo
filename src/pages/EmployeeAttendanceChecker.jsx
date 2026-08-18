import { useState } from "react";

function Activity5() {
  const [employeeName, setEmployeeName] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const checkAttendance = () => {
    if (employeeName === "" || timeIn === "") {
      setStatus("Please enter details for employee name and time in.");
      setMessage("");
      return;
    }

    const time = Number(timeIn);

    if (time <= 8) {
      setStatus("On Time");
      setMessage("Good job!");
    } else if (time <= 9) {
      setStatus("Late");
      setMessage("Please be on time tomorrow.");
    } else {
      setStatus("Very Late");
      setMessage("Report to your supervisor.");
    }
  };

  const reset = () => {
    setEmployeeName("");
    setTimeIn("");
    setStatus("");
    setMessage("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Employee Attendance Checker</h2>

        <input
          style={styles.input}
          type="text"
          placeholder="Employee Name"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
        />

        <input
          style={styles.input}
          type="number"
          placeholder="Time In (e.g. 8.5)"
          value={timeIn}
          onChange={(e) => setTimeIn(e.target.value)}
        />

        <div style={styles.buttons}>
          <button style={styles.checkButton} onClick={checkAttendance}>
            Check Attendance
          </button>

          <button style={styles.resetButton} onClick={reset}>
            Reset
          </button>
        </div>

        {status && (
          <div style={styles.result}>
            <h3>Attendance Result</h3>
            <p>Employee Name: {employeeName}</p>
            <p>Time In: {timeIn}</p>
            <p>Attendance Status: {status}</p>
            <p>Follow-up message: {message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#dbeafe",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "400px",
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
  },

  title: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#1d4ed8",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    boxSizing: "border-box",
    border: "1px solid #93c5fd",
    borderRadius: "6px",
    fontSize: "14px",
  },

  buttons: {
    display: "flex",
    gap: "10px",
  },

  checkButton: {
    flex: 1,
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#2563eb",
    color: "white",
    cursor: "pointer",
  },

  resetButton: {
    flex: 1,
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#93c5fd",
    color: "#1e3a8a",
    cursor: "pointer",
  },

  result: {
    marginTop: "25px",
    padding: "15px",
    backgroundColor: "#eff6ff",
    borderLeft: "4px solid #2563eb",
    borderRadius: "8px",
  },
};

export default Activity5;