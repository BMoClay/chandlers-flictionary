import './App.css';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { Canvas } from './Canvas'

function App() {

  const [animalToDraw, setAnimalToDraw] = useState(null)

  useEffect(() => {
    axios.get('/api').then((response) => {
      setAnimalToDraw(response.data.animal)
    })
  }, []) 

  return (
    <div className="App">
      {/* <h4>here's your word: </h4> */}
      <Canvas
         animal={animalToDraw}
      />
    </div>
  );
}

export default App;
