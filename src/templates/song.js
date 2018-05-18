import React from "react";

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <div className="sheet">
            <h1>{post.frontmatter.title}</h1>
            <h2>{post.frontmatter.artist}</h2>
            <div className="song" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        artist
      }
    }
  }
`;