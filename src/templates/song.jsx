import React, { useState } from 'react'
import { graphql } from 'gatsby'
import ChordSheetJS from 'chordsheetjs'
import Chord from 'chordjs'
import Layout from '../components/Layout'
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi'

export default function Song({ data }) {
  const post = data.markdownRemark
  const [key, setKey] = useState(post.frontmatter.key)

  console.log('key: ', key)

  let currentKey = Chord.parse(key)

  // console.log('post: ', post)
  // console.log('ck: ', currentKey)

  // const formattedSong = post.internal.content.replace(/---[\S\s]*---/g, '')

  // parse the ChordPro
  const song = new ChordSheetJS.ChordProParser().parse(post.internal.content)

  // Convert song object into HTML
  const htmlChordSheet = new ChordSheetJS.HtmlDivFormatter().format(song)

  return (
    <Layout>
      <header>
        <div className="container">
          <h1>{post.frontmatter.title}</h1>
          <h2>{post.frontmatter.artist}</h2>
          <h3>key of {currentKey.toString()}</h3>

          <section className="key-picker">
            <button onClick={() => setKey(currentKey.transposeDown())}>
              <FiMinusCircle className="inline-svg" />
            </button>
            <button onClick={() => setKey(currentKey.transposeUp())}>
              <FiPlusCircle className="inline-svg" />
            </button>
          </section>
        </div>
      </header>

      <div
        className="song"
        dangerouslySetInnerHTML={{ __html: htmlChordSheet }}
      />

      <YouTube video={post.frontmatter.youtube} />
    </Layout>
  )
}

// function KeyPicker({ key }) {
//   return (

//   )
// }

function YouTube({ video }) {
  if (video) {
    const embedURL = 'https://www.youtube.com/embed/' + video
    return (
      <div className="youtube">
        <iframe
          title="YouTube"
          width="600"
          height="330"
          src={embedURL}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    )
  } else {
    return ''
  }
}

export const query = graphql`
  query SongQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        artist
        key
        youtube
      }
      internal {
        content
      }
    }
  }
`
