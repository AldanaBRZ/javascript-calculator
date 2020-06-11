import React from 'react';

const Clear = (props) => {
  return(
    <div className="col-3 button">
      <button
        className="btn btn-danger btn-block"
        type="button"
        id={props.button.id}
        onClick={props.handleClick}
        onKeyPress={props.handleKeyPress}>
          {props.button.display}
      </button>
    </div>
  )
}

export default Clear;