import './index.css'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const NavBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const themeImgUrl = !isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
      return (
        <div className="navbar-master-container">
          <div
            className={`navbar-container ${
              isDarkTheme ? 'dark-mode' : 'light-mode'
            }`}
          >
            <img alt="website logo" src={logoUrl} className="logo-image" />

            <ul className="nav-items-container">
              <Link className="nav-link" to="/">
                <li className="nav-item">Home</li>
              </Link>
              <Link className="nav-link" to="about">
                <li className="nav-item">About</li>
              </Link>
            </ul>
            <button
              className="theme-change-btn"
              type="button"
              onClick={toggleTheme}
            >
              <img src={themeImgUrl} alt="theme" className="theme-image" />
            </button>
          </div>
          <hr className="hr-line" />
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NavBar
