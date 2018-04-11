import React from "react"

export default ({ data }) => {
  return (
    <div>
      <h1>All Songs</h1>
      <h4>{data.allMarkdownRemark.totalCount} Songs</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <span className="song-title">{node.frontmatter.title}</span>
          <p>{node.excerpt}</p>
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
          excerpt
        }
      }
    }
  }
`;