import React from 'react';

const Number = (props) => {
  return(
    <div className="col-3 button">
      <button
        className="btn btn-secondary btn-block" 
        type="button"
        id={props.button.id}
        onClick={props.handleClick}
        onKeyDown={props.handleKeyPress}>
          {props.button.display}
      </button>
    </div>
  )
}

export default Number;