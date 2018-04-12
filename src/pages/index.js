import React from "react"
import Link from "gatsby-link";

export default ({ data }) => {
  return (
    <div id="main">
      <h1>{data.allMarkdownRemark.totalCount} Songs</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
        <ul className="song-list">
          <li><Link to={node.fields.slug}>
              <span className="song-title">{node.frontmatter.title}</span>&mdash; 
              <span className="artist">{node.frontmatter.artist}</span>
          </Link></li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___title], order: ASC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            artist
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;