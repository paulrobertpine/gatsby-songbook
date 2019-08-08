import React from 'react'
import Layout from '../components/Layout.jsx'

class HowTo extends React.Component {
  render() {
    return (
      <Layout>
        <header>
          <div className="container">
            <h1>How to</h1>
          </div>
        </header>

        <div className="container">
          <h2>Creating and editing a song</h2>
          <p>This website uses a system called  <a href="https://www.chordpro.org/chordpro/ChordPro-Chords.html">ChordPro</a> for adding chords to lyrics; it's a standard way to ensure that chords will show up in the right place and are able to be transposed, et.</p>
          <h3>About ChordPro</h3>
          <p>The ChordPro system works by adding a chord in sqaure brackets [] directly before the syllable where the chord is played.</p>
          <h2>Conventions</h2>
          <h3>Inserting chords</h3>
          <h3>Showing rhythm</h3>
          <p>It can be helpful to show rhythm using barlines and beats like:</p>
          <p>| / / / / | / / / / | / / / / | / / / / |</p>
          <p>is 4 bars in 4/4 time</p>
          <h2>GitHub workflow</h2>
        </div>
      </Layout>
    )
  }
}

export default HowTo
