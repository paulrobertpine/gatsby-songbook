import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import 'typeface-cabin'
import 'typeface-aleo'
import '../styles/style.scss'

export default ({ children }) => (
  <div id="root">
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <meta charSet="utf-8" />
      <title>Songbook</title>
    </Helmet>
    <Link to="/" className="site-title">
      <h1>Songbook</h1>
    </Link>
    <div id="main">{children}</div>
    <a href="#top" className="site-footer">
      <h1>Top</h1>
    </a>
  </div>
)
