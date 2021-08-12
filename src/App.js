import './App.css';
import { useEffect, useState, useRef } from 'react';
// import React from 'react'
import { Canvas } from './Canvas'


// rough draft of next additions required for game //
// import Word from './GetWord'
// import Submit from './SubmitDrawing'

function App() {

  // const [animalToDraw, setAnimalToDraw] = useState(null)
  // set[animalToDraw] = animal
  

  // const animals = ["whale", "snake", "cat", "monkey", "camel", "rabbit", "pig", "bird", "lion", "duck"]
  // let animal = animals[Math.floor(Math.random()*animals.length)];

  // useEffect(() => {
  //   axios.get("www.googlequickdrawword").then((response) => {
  //     setAnimalToDraw(response.data)
  //   })
  // }, [])

  useEffect(() => {
    fetch('/api').then(
      response => response.json()
      ).then(data => console.log(data))
  });  
 
  return (
    <div className="App">
      <Canvas/>
    </div>
  );
}

export default App;
