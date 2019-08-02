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
          <p>GitHub workflow</p>
          <h3>About ChordPro</h3>
          <h2>Conventions</h2>
          <p>There are some!</p>
          <h3>Inserting chords</h3>
          <h3>Showing rhythm</h3>
        </div>
      </Layout>
    )
  }
}

export default HowTo
