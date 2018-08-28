import React from "react";
import ChordSheetJS from 'chordsheetjs';

const Song = ({ data }) => {

  const post = data.markdownRemark;
  let formattedSong = post.internal.content;

  // remove the frontmatter from the song content 
  formattedSong = formattedSong.replace(/---[\S\s]*---/g, "");

  let song = "";

  // check for ChordPro or ChordSheet style (default) formatting. frontmatter has a BOOL flag for ChordPro
  if (post.frontmatter.chordpro) {
    song = new ChordSheetJS.ChordProParser().parse(formattedSong);
    // console.log("yep");
  } else {
    song = new ChordSheetJS.ChordSheetParser().parse(formattedSong);
    // console.log("nope");
  }

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

export default Song;

export const query = graphql`
  query SongQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        artist
        key
        chordpro
      }
      internal {
        content
      }
    }
  }
`;