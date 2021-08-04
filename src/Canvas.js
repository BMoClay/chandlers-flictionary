import { useEffect, useState, useRef } from 'react';

export function Canvas() {

    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)
  
    useEffect(() => {
      const canvas = canvasRef.current
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
  
      const context = canvas.getContext("2d")
      context.scale(1,1)
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
      <button onClick={clearCanvas}>clear</button>
      <canvas onMouseDown={startDrawing} onMouseUp={stopDrawing} onMouseMove={draw} ref={canvasRef}>
  
      </canvas>
      </div>
    );
  }


