import React from "react"
import Link from "gatsby-link";
import ChordSheetJS from 'chordsheetjs';

const chordSheet = `
       Am         C/G        F          C
Let it be, let it be, let it be, let it be
C                G              F  C/E Dm C
Whisper words of wisdom, let it be`.substring(1);


const chordSheet2 = `
{title: Let it be}
{subtitle: ChordSheetJS example version}
{Chorus}
Let it [Am]be, let it [C/G]be, let it [F]be, let it [C]be
[C]Whisper words of [G]wisdom, let it [F]be [C/E] [Dm] [C]`.substring(1);

const parser = new ChordSheetJS.ChordSheetParser();
const parser2 = new ChordSheetJS.ChordProParser();
const song = parser2.parse(chordSheet2);

const formatter = new ChordSheetJS.HtmlDivFormatter();
// const formatter = new ChordSheetJS.HtmlTableFormatter();
const disp = formatter.format(song);

export default ({ data }) => {
  return (
    <div>
      <h1>ChordPro test</h1>
      <div dangerouslySetInnerHTML={{__html: disp}}/>
    </div>
  )
}
      