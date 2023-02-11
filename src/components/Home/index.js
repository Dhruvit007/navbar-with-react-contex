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
          const imgUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
          return (
            <>
              <NavBar />
              <div
                className={`home-container ${isDarkTheme ? 'dark-theme' : ''}`}
              >
                <img alt="home" src={imgUrl} />
                <h1
                  className={
                    isDarkTheme
                      ? 'home-name-dark-theme'
                      : 'home-name-light-theme'
                  }
                >
                  Home
                </h1>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default About
