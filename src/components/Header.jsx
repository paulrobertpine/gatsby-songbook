import React from 'react'
import { Link } from 'gatsby'
import SVG from 'react-inlinesvg'
import logo from '../images/musician.svg'
import { FiPlayCircle, FiPauseCircle } from 'react-icons/fi'

class Header extends React.Component {
  constructor() {
    super()
    // this.pageScroll = this.pageScroll.bind(this)
    this.startScrolling = this.startScrolling.bind(this)
    this.pauseScrolling = this.pauseScrolling.bind(this)
  }

  // pageScroll() {
  //   window.scrollBy(0, 1) // horizontal and vertical scroll increments
  //   scrolldelay = setTimeout('pageScroll()', 30) // scrolls every 100 milliseconds
  // }

  startScrolling(e) {
    console.log('start scrolling')
  }

  pauseScrolling(e) {
    console.log('pause scrolling')
  }

  render() {
    return (
      <header id="site-header">
        <div className="container">
          <Link to="/" className="site-title">
            <SVG src={logo} width="30" />
          </Link>

          <ul className="util-nav">
            <li>
              <button onClick={this.pauseScrolling.bind(this)}>
                <FiPauseCircle />
              </button>

              <button onClick={this.startScrolling.bind(this)}>
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
