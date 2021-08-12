import './App.css';
import { useEffect, useState, useRef } from 'react';
import { Canvas } from './Canvas'
//import DigitalClock from './DigitalClock'
import NewCanvas from './NewCanvas'
// rough draft of next additions required for game //
import Word from './GetWord'
import Submit from './SubmitDrawing'

function App() {
  let words = ["whale", "snake", "cat", "monkey", "camel", "rabbit", "pig", "bird", "lion", "duck"]
 console.log(words)
  //  const [currentWordToDraw, setCurrentWordToDraw] = useState(null)
  // useEffect(() => {
  //   axios.get("www.googlequickdrawword").then((response) => {
  //     setCurrentWordToDraw(response.data)
  //   })
  // }, [])

  
 
  return (
    <>
    {/* <Canvas 
      wordToDraw={currentWordToDraw}
    /> */}
    <NewCanvas/>
    {/* <DigitalClock/> */}
    </>
  );
}

export default App;
