import React from 'react';
import { useState } from 'react';

const Text = (props) => {
  const [Text, setText] = useState("To upper case");

  const Upper = () => {
    let text = Text.toUpperCase();
    setText(text);
  }
  const lower = () => {
    let text = Text.toLowerCase();
    setText(text);
  }
  const clear = () => {
    let text = "";
    setText(text);
  }
  
  const handleOnChange = (event) => {
    setText(event.target.value)
  }

return (
  <>
  <div className= "container mb-3 mt-4">
    <h3>{props.heading}</h3>
    <textarea className="form-control my-3" id="exampleFormControlTextarea1" onChange={handleOnChange} value={Text} rows="8"></textarea>
    <button type='buttton' onClick={Upper} className='btn btn-primary mx-2'>To Uppercase</button>
    <button type='button' onClick={lower} className='btn btn-secondary mx-2'>To lowercase</button>
    <button type='button' onClick={clear} className='btn btn-info mx-2'>Clear</button>
  </div>
  <div className='container text-secondary'>
    <h1>Your Text summary</h1>
    <p>{Text.split(" ").length} words and {Text.length} characters</p>
    <p>{0.008 * Text.split(" ").length} Minutes to read</p>
    <h3>Preview Text</h3>
    <p>{Text}</p>
  </div>
  </>
)
}

export default Text;