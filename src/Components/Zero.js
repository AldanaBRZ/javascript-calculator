import React from 'react';

const Zero = (props) => {
  return(
    <div className="col-6 button">
      <button
        className="btn btn-secondary btn-block"
        type="button"
        id={props.button.id}
        onClick={props.handleClick}>
          {props.button.display}
      </button>
    </div>
  )
}

export default Zero;