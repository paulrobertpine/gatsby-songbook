import React, { useState } from 'react'
import { graphql } from 'gatsby'
import ChordSheetJS from 'chordsheetjs'
import Chord from 'chordjs'
import Layout from '../components/Layout'
import { FiMinusCircle, FiPlusCircle, FiRefreshCw } from 'react-icons/fi'

export default function Song({ data }) {
  const post = data.markdownRemark

  //  some songs don't have keys yet
  let keyExists = post.frontmatter.key
  if (!keyExists) {
    keyExists = 'A'
  }

  const [key, setKey] = useState(Chord.parse(keyExists))
  const [song] = useState(
    new ChordSheetJS.ChordProParser().parse(post.internal.content)
  )

  function flipAccidentals() {
    setKey(key.switchModifier())

    song.lines.forEach(line => {
      line.items.forEach(item => {
        let chord = Chord.parse(item.chords)
        if (chord) {
          chord = chord.switchModifier()
          item.chords = chord
        }
      })
    })
  }

  function goDown() {
    setKey(key.transposeDown())

    song.lines.forEach(line => {
      line.items.forEach(item => {
        let chord = Chord.parse(item.chords)
        if (chord) {
          chord = chord.transposeDown()
          item.chords = chord
        }
      })
    })
  }

  function goUp() {
    setKey(key.transposeUp())

    song.lines.forEach(line => {
      line.items.forEach(item => {
        let chord = Chord.parse(item.chords)
        if (chord) {
          chord = chord.transposeUp()
          item.chords = chord
        }
      })
    })
  }

  // Convert song object into HTML
  const htmlChordSheet = new ChordSheetJS.HtmlDivFormatter().format(song)

  return (
    <Layout>
      <header>
        <div className="container">
          <h1>{post.frontmatter.title}</h1>
          <h2>{post.frontmatter.artist}</h2>
          <h3>key of {key.toString()}</h3>
          <section className="key-picker">
            <button onClick={() => goDown()}>
              <FiMinusCircle />
            </button>
            <button onClick={() => goUp()}>
              <FiPlusCircle />
            </button>
            <button onClick={() => flipAccidentals()}>
              <FiRefreshCw />
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
