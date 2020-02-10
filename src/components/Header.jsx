import React from 'react'
import { Link } from 'gatsby'
import SVG from 'react-inlinesvg'
import logo from '../images/musician.svg'
import {
  FiPlayCircle,
  FiPauseCircle,
  FiArrowRightCircle,
  FiArrowLeftCircle,
} from 'react-icons/fi'

let scrolldelay = -1

class Header extends React.Component {
  constructor() {
    super()
    this.pageScroll = this.pageScroll.bind(this)
    this.startScrolling = this.startScrolling.bind(this)
    this.pauseScrolling = this.pauseScrolling.bind(this)
    this.setScroll = this.setScroll.bind(this)
    this.state = {
      scrolling: true,
      scrollSpeed: 50,
    }
  }

  pageScroll() {
    window.scrollBy(0, 1) // horizontal and vertical scroll increments
    scrolldelay = setTimeout(this.pageScroll, this.state.scrollSpeed)
  }

  startScrolling(e) {
    this.pageScroll()
  }

  pauseScrolling(e) {
    window.clearTimeout(scrolldelay)
    scrolldelay = -1
  }

  setScroll(e) {
    this.setState({ scrolling: !this.state.scrolling })

    if (this.state.scrolling) {
      this.startScrolling(e)
    } else {
      this.pauseScrolling(e)
    }
  }

  increaseSpeed = e => {
    if (this.state.scrollSpeed > 0) {
      this.setState({
        scrollSpeed: this.state.scrollSpeed - 10,
      })
    }
  }

  decreaseSpeed = e => {
    this.setState({
      scrollSpeed: this.state.scrollSpeed + 10,
    })
  }

  render() {
    return (
      <header id="site-header">
        <div className="container">
          <Link
            to="/"
            className="site-title"
            onClick={this.pauseScrolling.bind(this)}
          >
            <SVG src={logo} width="30" />
          </Link>
          <ul className="util-nav">
            <li>
              <button onClick={this.decreaseSpeed}>
                <FiArrowLeftCircle />
              </button>
            </li>
            <li>
              <span className="scroll-speed-label">
                {this.state.scrollSpeed}
              </span>
            </li>
            <li>
              <button onClick={this.increaseSpeed}>
                <FiArrowRightCircle />
              </button>
            </li>
            <li>
              <button onClick={this.setScroll.bind(this)}>
                {this.state.scrolling ? <FiPlayCircle /> : <FiPauseCircle />}
              </button>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header
