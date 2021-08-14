import { useEffect, useState, useRef } from 'react';

export function Canvas(animal) {

    console.log(animal)
    
    const canvasRef = useRef(null) // holds reference to canvas element
    const contextRef = useRef(null) // holds reference to context variable
    const [isDrawing, setIsDrawing] = useState(false) // boolean to draw/not draw
  
    // runs after every render. kind of like a combo of componentDidMount and componentDidUpdate
    useEffect(() => {
      const canvas = canvasRef.current // finding canvas element
    //   canvas.width = window.innerWidth
    //   canvas.height = window.innerHeight
    //   canvas.style.width = `${window.innerWidth}px`
    //   canvas.style.height = `${window.innerHeight}px`
    //   canvas.style.border = `5px navy solid`
  
      const context = canvas.getContext("2d") // creating drawing
      // context.scale(1,1)
      context.lineCap = "round" // lines will have rounded edges
      context.strokeStyle = "black" // line color
      context.lineWidth = 5 // width of line
      contextRef.current = context
    }, [])
  
    const startDrawing = ({nativeEvent}) => {
      const {offsetX, offsetY} = nativeEvent
      contextRef.current.beginPath()
      contextRef.current.moveTo(offsetX,offsetY)
      setIsDrawing(true)
    }
  
    const stopDrawing = () => {
      contextRef.current.closePath()
      setIsDrawing(false)
    }
  
    const draw = ({nativeEvent}) => {
      if(isDrawing){
        const {offsetX, offsetY} = nativeEvent
        contextRef.current.lineTo(offsetX,offsetY)
        contextRef.current.stroke()
      }
    }
  
    const clearCanvas = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d")
      context.fillStyle = "white"
      context.fillRect(0, 0, canvas.width, canvas.height)
    }
  
    return (
      <div>
      <p>{data.animal}</p>
      <button onClick={clearCanvas}>clear</button>
      <h4>here's your word: {animal.animal}</h4>
      <canvas onMouseDown={startDrawing} onMouseUp={stopDrawing} onMouseMove={draw} ref={canvasRef} width={700} height={700}
        style={{ border: '5px navy solid', marginTop: 10}}>
  
      </canvas>
      </div>
    );
  }
  // export default Canvas 
