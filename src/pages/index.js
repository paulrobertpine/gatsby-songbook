import React from "react"
import Link from "gatsby-link";

export default ({ data }) => {
  return (
    <div id="main">
      <h1>All Songs</h1>
      <h4>{data.allMarkdownRemark.totalCount} Songs</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
        <Link to={node.fields.slug}>
          <span className="song-title">{node.frontmatter.title}</span>
          <p>{node.excerpt}</p>
        </Link>
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