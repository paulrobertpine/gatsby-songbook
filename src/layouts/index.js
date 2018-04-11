import React from "react";
import Link from "gatsby-link";
import './index.scss'

export default ({ children }) => (
  <div id="main">
    <Link className="site-title"to={`/`}>
        DAG Song Book
    </Link>
    {children()}
  </div>
);