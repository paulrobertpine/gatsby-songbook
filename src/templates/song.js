import React from "react";
import ChordSheetJS from 'chordsheetjs';

const TransposingSong = ({ data }) => {

  const post = data.markdownRemark;

  // format the song to remove HTML tags
  let formattedSong = post.html;
  formattedSong = formattedSong.replace(/<p>/g, "");
  formattedSong = formattedSong.replace(/<\/p>/g, "\n");

  // parse the song as ChordPro
  const song = new ChordSheetJS.ChordProParser().parse(formattedSong);

  // Convert ChordPro object into HTML
  const htmlChordSheet = new ChordSheetJS.HtmlDivFormatter().format(song);

  return (
    <div className="sheet">
      <h1>{post.frontmatter.title}</h1>
      <h2>{post.frontmatter.artist}</h2>
      <p>key of {post.frontmatter.key}</p>
      <div className="song" dangerouslySetInnerHTML={{ __html: htmlChordSheet }} />
    </div>
  );
};

export default TransposingSong;

export const query = graphql`
  query TransposingSongQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        artist
        key
      }
      html
    }
  }
`;