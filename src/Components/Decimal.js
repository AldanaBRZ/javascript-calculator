import React from 'react';

const Decimal = (props) => {
  return(
    <div className="col-3 button">
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

export default Decimal;