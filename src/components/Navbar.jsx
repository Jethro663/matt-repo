import '../styles/Navbar.css'

function Navbar({ activePage, setActivePage }) {
  return (
    <nav className="portal-navbar" aria-label="Main navigation">
      <button
        type="button"
        className={activePage === 'home' ? 'portal-navbar__item active' : 'portal-navbar__item'}
        onClick={() => setActivePage('home')}
        aria-current={activePage === 'home' ? 'page' : undefined}
      >
        Home
      </button>

      <button
        type="button"
        className={activePage === 'activity1' ? 'portal-navbar__item active' : 'portal-navbar__item'}
        onClick={() => setActivePage('activity1')}
        aria-current={activePage === 'activity1' ? 'page' : undefined}
      >
        Activity 1
      </button>

      <button
        type="button"
        className={activePage === 'activity2' ? 'portal-navbar__item active' : 'portal-navbar__item'}
        onClick={() => setActivePage('activity2')}
        aria-current={activePage === 'activity2' ? 'page' : undefined}
      >
        Activity 2
      </button>

      <button
        type="button"
        className={activePage === 'activity3' ? 'portal-navbar__item active' : 'portal-navbar__item'}
        onClick={() => setActivePage('activity3')}
        aria-current={activePage === 'activity3' ? 'page' : undefined}
      >
        Activity 3
      </button>

      <button
        type="button"
        className={activePage === 'activity4' ? 'portal-navbar__item active' : 'portal-navbar__item'}
        onClick={() => setActivePage('activity4')}
        aria-current={activePage === 'activity4' ? 'page' : undefined}
      >
        Activity 4
      </button>

      <button
        type="button"
        className={activePage === 'activity5' ? 'portal-navbar__item active' : 'portal-navbar__item'}
        onClick={() => setActivePage('activity5')}
        aria-current={activePage === 'activity5' ? 'page' : undefined}
      >
        Activity 5
      </button>
    </nav>
  )
}

export default Navbar
