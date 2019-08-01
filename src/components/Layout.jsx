import React from 'react'
import Helmet from 'react-helmet'
import 'typeface-cabin'
import 'typeface-aleo'
import '../styles/style.scss'

import Header from './Header.jsx'

export default ({ children }) => (
  <div id="root">
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <meta charSet="utf-8" />
      <title>Songbook</title>
    </Helmet>
    <Header />
    <div id="main">{children}</div>
  </div>
)
