import React from 'react'
import { Link } from 'gatsby'
import SVG from 'react-inlinesvg'
import logo from '../images/musician.svg'
import { FiPlayCircle, FiPauseCircle } from 'react-icons/fi'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      search: '',
    }
  }

  render() {
    return (
      <header id="site-header">
        <div className="container">
          <Link to="/" className="site-title">
            <SVG src={logo} width="30" />
            <span>Songbook</span>
          </Link>

          <ul className="util-nav">
            <li>
              <button>
                <FiPauseCircle />
              </button>
              <button>
                <FiPlayCircle />
              </button>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header
