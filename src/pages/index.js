import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-link"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <h1>Jams!</h1>
      <h2>{data.allMarkdownRemark.totalCount} Songs</h2>
      <div id="songbook">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="song-card">
            <Link to={node.fields.slug}>
              <span className="song-title">{node.frontmatter.title}</span>
              <span className="artist">{node.frontmatter.artist}</span>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
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
`