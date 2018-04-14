import React from "react";
import Link from "gatsby-link";
import './index.scss'
// import Logo from '../images/home.svg'; react component way?

export default ({ children, data }) =>
  <div id="root">
    <Link className="site-title"to={`/`}>
      <h1>{data.site.siteMetadata.title}</h1>
    </Link>
    <div id="main">
      {children()}
    </div>
  </div>

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
