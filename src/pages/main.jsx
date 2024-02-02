import React, { useState } from 'react';
import Header from "../components/header";
import Canva from "../components/canva";
import "../css/main.css";
const Main = () => {
    
    const [brushStyle, setBrushStyle] = useState('default');

    return (

        <div className="main">
            <Header  brushStyle={brushStyle} setBrushStyle={setBrushStyle} />
            <Canva brushStyle={brushStyle}/>
            
        </div>

)


}
export default Main;