import React from 'react';

const ClearOne = (props) => {
  return(
    <div className="col-3 button">
      <button
        className="btn btn-danger btn-block"
        type="button"
        id={props.button.id}
        onClick={props.handleClick}>
          <i 
            id={props.button.id}
            className="fas fa-arrow-left"
            ></i>
      </button>
    </div>
  )
}

export default ClearOne;