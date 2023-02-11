import {Component} from 'react'
import NavBar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class About extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <NavBar />
              <div
                className={`not-found-container ${
                  isDarkTheme ? 'dark-theme' : ''
                }`}
              >
                <img
                  alt="not found"
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  className="not-found-image"
                />
                <h1
                  className={
                    isDarkTheme
                      ? 'not-found-dark-theme'
                      : 'not-found-light-theme'
                  }
                >
                  Lost Your Way
                </h1>
                <p
                  className={
                    isDarkTheme
                      ? 'not-found-dark-theme'
                      : 'not-found-light-theme'
                  }
                >
                  We cannot seem to find the page
                </p>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default About
