import React from 'react'
import { Link } from 'gatsby'
import SVG from 'react-inlinesvg'
import logo from '../images/musician.svg'
import { FiPlayCircle, FiPauseCircle } from 'react-icons/fi'
import Slider from 'rc-slider'

let scrolldelay = -1

class Header extends React.Component {
  constructor() {
    super()
    this.pageScroll = this.pageScroll.bind(this)
    // this.handleKeyDown = this.handleKeyDown.bind(this)
    // this.startScrolling = this.startScrolling.bind(this)
    // this.pauseScrolling = this.pauseScrolling.bind(this)
    // this.log = this.log.bind(this)
    this.setScroll = this.setScroll.bind(this)
    this.state = {
      scrolling: true,
      scrollSpeed: 150,
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, false)
  }

  // handleKeyDown(e) {
  //   if (e.keyCode === 13 /*enter*/) {
  //     // this.okAction();
  //     console.log('hey')
  //   }
  // }

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

  setScrollSpeed = e => {
    let speed = 300 - e * 3
    console.log(speed)

    this.setState({
      scrollSpeed: speed,
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
          <div className="scroll-nav">
            <Slider
              className="speed-slider"
              defaultValue={50}
              onAfterChange={this.setScrollSpeed}
            />
            <button onClick={this.setScroll.bind(this)}>
              {this.state.scrolling ? <FiPlayCircle /> : <FiPauseCircle />}
            </button>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
