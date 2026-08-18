import '../styles/Home.css'

function Home({ onStartActivity1 }) {
  return (
    <section className="portal-home">
      <div className="portal-home__hero">
        <p className="portal-home__eyebrow">React Activity Portal</p>
        <h1>Build, explore, and test each React activity in one place.</h1>
        <p className="portal-home__subtitle">
          This portal contains five React activities designed to practice front-end development,
          validation, and responsive UI design.
        </p>

        <button type="button" className="portal-home__cta" onClick={onStartActivity1}>
          Start Activity 1
        </button>
      </div>

      <div className="portal-home__activities">
        <h2>Activities</h2>

        <div className="portal-home__grid">
          <article className="portal-home__card">
            <span className="portal-home__number">1</span>
            <h3>Login Authentication</h3>
          </article>

          <article className="portal-home__card">
            <span className="portal-home__number">2</span>
            <h3>Student Grade Evaluation</h3>
          </article>

          <article className="portal-home__card">
            <span className="portal-home__number">3</span>
            <h3>Password Strength Checker</h3>
          </article>

          <article className="portal-home__card">
            <span className="portal-home__number">4</span>
            <h3>Electricity Bill Calculator</h3>
          </article>

          <article className="portal-home__card">
            <span className="portal-home__number">5</span>
            <h3>Employee Attendance Checker</h3>
          </article>
        </div>
      </div>

      <footer className="portal-home__footer">
        <p>React Activity Portal</p>
      </footer>
    </section>
  )
}

export default Home
