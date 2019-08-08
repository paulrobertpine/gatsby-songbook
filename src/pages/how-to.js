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
          <p>
            This website uses a system called{' '}
            <a href="https://www.chordpro.org/chordpro/ChordPro-Chords.html">
              ChordPro
            </a>{' '}
            for adding chords to lyrics; it's a standard way to ensure that
            chords will show up in the right place and are able to be
            transposed, etc.
          </p>
          <p>
            The ChordPro system works by adding a chord in sqaure brackets []
            directly before the syllable where the chord is played:
          </p>
          <code>
            Let it [Am]be, let it [C/G]be, let it [F]be, let it [C]be
            <br />
            [C]Whisper words of [G]wisdom, let it [F]be [C/E] [Dm] [C]
          </code>
          <p>
            There is a helpful tool called{' '}
            <a href="https://martijnversluis.github.io/ChordFiddle">
              ChordFiddle
            </a>{' '}
            that will let you cut-and-paste in a standard lead sheet and
            convert to ChordPro format. It also lets you transpose the songs.
          </p>

          <h2>Conventions</h2>
          <h3>Showing rhythm</h3>
          <p>It can be helpful to show rhythm using barlines and beats like:</p>
          <code>| / / / / | / / / / | / / / / | / / / / |</code>
          <p>is 4 bars in 4/4 time</p>
          <p>You can use this to add chords to just like adding to lyrics:</p>
          <code>| [C]/ / / / | [G]/ / / / | [F]/ / / / | [Am/ / / / |</code>
          <p>useful for jammy bits without lyrics.</p>
          <p>
            You can also put the forward slashes right in the chord symbols when
            you need to show rhythms over lyrics, like:
          </p>
          <code>
            [F]Reflect the stars that [Am]guide me toward sal-[Em]va-[F / / / Am
            /]tion
          </code>
          <p>
            When a chord is in the middle of the word, use a hyphen right before
            it:
          </p>
          <code>[G]I hear the drums [Bm]echoing to-[Em]night</code>
          <h2>GitHub workflow</h2>
        </div>
      </Layout>
    )
  }
}

export default HowTo
