import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import React, { useState} from 'react';
export interface CountState{
  words: number,
  chars: number,
  sentences: number,
  paragraphs: number,
  pron: number
}

const App = () => {


  const [countState, setCountState] = useState<CountState>(
    {
      words: 0,
      chars: 0,
      sentences: 0,
      paragraphs: 0,
      pron: 0
    }
  )

  const updateCountState = (newCountState: CountState) => {
    setCountState(newCountState);
  };


  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox countState={countState} />
          <TextArea  countState={countState} updateCountState={updateCountState} />
          <BottomResultBox />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
