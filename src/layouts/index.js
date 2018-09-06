import React from "react";
import Link from "gatsby-link";
import 'typeface-cabin';
import 'typeface-aleo';
import './index.scss';

export default ({ children, data }) =>
  <div id="root">
    <Link className="site-title" to={`/`}>
      <h1>{data.site.siteMetadata.title}</h1>
    </Link>
    <div id="main">
      {children()}
    </div>
    <a href="#" className="site-footer">
      <h1>Top</h1>
    </a>
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
