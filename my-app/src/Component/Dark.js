import React from 'react'
import { useState } from 'react';
const Dark = () => {
  const [Color, setColor] = useState("white");
  const change = () => {
    const mode = Color === "white" ? "black" : "white";
    setColor(mode);
    document.body.style.backgroundColor = mode === "white" ? "#001514" : "#D6DBDF";
  }
  return (
    <button type='button' className='btn btn-info' onClick={change}>{Color === "white" ? "sun rise" : "sun set"}</button>
  )
}

export default Dark;