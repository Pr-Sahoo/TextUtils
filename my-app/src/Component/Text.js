import React from 'react';

const Text = (props) => {
    return (
      <div className="mb-3 mt-4">
        <h3>{props.heading}</h3>
      <textarea className="form-control my-3" id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    )
}

export default Text;