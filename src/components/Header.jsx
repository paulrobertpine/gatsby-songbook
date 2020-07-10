import React, { useState } from 'react'
import { Link } from 'gatsby'
import SVG from 'react-inlinesvg'
import logo from '../images/musician.svg'
import { FiPlayCircle, FiPauseCircle } from 'react-icons/fi'
import Slider from 'rc-slider'

const defaultScrollSpeed = 30

export default function Header() {
  const [scrolling, setScrolling] = useState(false)
  const [scrollLines, setScrollLines] = useState()
  const [timeoutID, setTimeoutID] = useState()

  if (!scrollLines) {
    setScrollSpeed(defaultScrollSpeed)
  }

  function startScrolling() {
    setScrolling(true)
    window.scrollBy(0, scrollLines, 'smooth')
    // 100 is delay in ms between scrolls
    setTimeoutID(setTimeout(startScrolling, 100))
  }

  function pauseScrolling() {
    setScrolling(false)
    window.clearTimeout(timeoutID)
  }

  function toggleScrolling() {
    setScrolling(!scrolling)

    if (!scrolling) {
      startScrolling()
    } else {
      pauseScrolling()
    }
  }

  function setScrollSpeed(e) {
    console.log()
    pauseScrolling()
    const calcScrollLines = (e / 10 + 0.1).toPrecision(2)
    setScrollLines(calcScrollLines)
  }

  return (
    <header id="site-header">
      <div className="container">
        <Link to="/" className="site-title" onClick={() => pauseScrolling()}>
          <SVG src={logo} width="30" />
        </Link>
        <div className="scroll-nav">
          <Slider
            className="speed-slider"
            defaultValue={defaultScrollSpeed}
            onAfterChange={e => setScrollSpeed(e)}
          />
          <button onClick={() => toggleScrolling()}>
            {scrolling ? <FiPauseCircle /> : <FiPlayCircle />}
          </button>
        </div>
      </div>
    </header>
  )
}
