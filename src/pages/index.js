import React from "react"
import Link from "gatsby-link";

// this is the home page

export default ({ data }) => {
  return (
    <div>
      <h1>DAG Jams</h1>
      <h2>{data.allMarkdownRemark.totalCount} Songs</h2>
      <div id="songbook">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="song-card">
            <Link to={node.fields.slug}>
              <span className="song-title">{node.frontmatter.title}</span>
              {/* <span className="artist">{node.frontmatter.artist}</span> */}
            </Link>
          </div>
        ))}
      </div>
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
