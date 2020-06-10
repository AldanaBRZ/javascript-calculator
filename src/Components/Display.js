import React from 'react';

const Display = (props) => {
  return(
    <div 
      className="col-12"
      id="display-div">
      <p className="display-count">{props.count}</p>
      <h3 id="display">{props.result}</h3>
    </div>
  )
}

export default Display;