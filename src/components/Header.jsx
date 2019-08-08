import React from 'react'
import { Link } from 'gatsby'
import SVG from 'react-inlinesvg'
import logo from '../images/musician.svg'
import { FiPlayCircle, FiPauseCircle } from 'react-icons/fi'

let scrolldelay = -1

class Header extends React.Component {
  constructor() {
    super()
    this.pageScroll = this.pageScroll.bind(this)
    this.startScrolling = this.startScrolling.bind(this)
    this.pauseScrolling = this.pauseScrolling.bind(this)
  }

  pageScroll() {
    window.scrollBy(0, 1) // horizontal and vertical scroll increments
    scrolldelay = setTimeout(this.pageScroll, 30) // scrolls every 100 milliseconds
  }

  startScrolling(e) {
    if (scrolldelay !== -1) return // prevents multiple scroll requests
    this.pageScroll()
  }

  pauseScrolling(e) {
    window.clearTimeout(scrolldelay)
    scrolldelay = -1
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
