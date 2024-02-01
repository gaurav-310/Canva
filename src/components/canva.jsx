import  "../css/canva.css";
import { useRef,useEffect } from 'react';

const Canva = () =>{
    const canvasRef = useRef(null);
    useEffect(() => {

    }, [])
    const startDrawing = () => {

    }
    const finishDrawing = () => {

    }

    const draw = () => {
                
    }

    
    return (
          <canvas className="canva"
              onMouseDown={startDrawing}
              onMouseUp={finishDrawing}

          />
    )
}
export default Canva;