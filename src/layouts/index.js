import React from "react";
import Link from "gatsby-link";
import './index.scss'

export default ({ children, data }) => 
  <div id="root">
    <Link className="site-title"to={`/`}>
      {data.site.siteMetadata.title}
    </Link>
    {children()}
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