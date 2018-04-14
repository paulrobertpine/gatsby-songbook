import React from "react";
import Link from "gatsby-link";
import './index.scss';
// import Logo from '../images/like.svg';

export default ({ children, data }) =>
  <div id="root">
    <Link className="site-title"to={`/`}>
      <h1>{data.site.siteMetadata.title}</h1>
    </Link>
    <div id="main">
      {children()}
    </div>
    <Link className="site-footer"to={`/`}>
      <h1>TOP</h1>
    </Link>
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
