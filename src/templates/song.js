import React from 'react'
import { graphql } from 'gatsby'
import ChordSheetJS from 'chordsheetjs'
import Layout from '../components/layout'

const Song = ({ data }) => {
  const post = data.markdownRemark
  let formattedSong = post.internal.content

  // remove the frontmatter from the song content
  formattedSong = formattedSong.replace(/---[\S\s]*---/g, '')

  let song = ''

  // check for ChordPro or ChordSheet style (default) formatting. frontmatter has a BOOL flag for ChordPro
  if (post.frontmatter.chordpro) {
    song = new ChordSheetJS.ChordProParser().parse(formattedSong)
  } else {
    song = new ChordSheetJS.ChordSheetParser().parse(formattedSong)
  }

  // Convert ChordPro object into HTML
  const htmlChordSheet = new ChordSheetJS.HtmlDivFormatter().format(song)

  return (
    <Layout>
      <div className="sheet">
        <div className="song-header">
          <h1>{post.frontmatter.title}</h1>
          <h2>{post.frontmatter.artist}</h2>
          <h3>key of {post.frontmatter.key}</h3>
        </div>
        <div
          className="song"
          dangerouslySetInnerHTML={{ __html: htmlChordSheet }}
        />
      </div>
    </Layout>
  )
}

export default Song

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
`
