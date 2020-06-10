import React from 'react';
import Number from './Number';
import Equals from './Equals';
import Zero from './Zero';
import Clear from './Clear';
import ClearOne from './ClearOne';
import Decimal from './Decimal';
import Action from './Action';
import Display from './Display';

const Calculator = (props) => {
  return(
    <div className="row">
      <div className="container col-5 calculator">
        <div className="row display">
          <Display 
            result={props.result}
            count={props.count}
            handleClick={props.handleClick} />
        </div>
        <div className="row">
          <Clear 
            button={props.keys[0]}
            handleClick={props.handleClick} />
          <ClearOne 
            button={props.keys[1]}
            handleClick={props.handleClick} />
          <Action 
            button={props.keys[18]}
            handleClick={props.handleClick} />
          <Action 
            button={props.keys[2]}
            handleClick={props.handleClick} />
        </div>
        <div className="row">
          <Number 
            button={props.keys[8]}
            handleClick={props.handleClick} />
          <Number 
            button={props.keys[9]}
            handleClick={props.handleClick} />
          <Number 
            button={props.keys[10]}
            handleClick={props.handleClick} />
          <Action 
            button={props.keys[3]}
            handleClick={props.handleClick} />
        </div>
        <div className="row">
          <Number 
            button={props.keys[11]}
            handleClick={props.handleClick} />
          <Number 
            button={props.keys[12]}
            handleClick={props.handleClick} />
          <Number 
            button={props.keys[13]}
            handleClick={props.handleClick} />
          <Action 
            button={props.keys[4]}
            handleClick={props.handleClick} />
        </div>
        <div className="row">
          <Number 
            button={props.keys[14]}
            handleClick={props.handleClick} />
          <Number 
            button={props.keys[15]}
            handleClick={props.handleClick} />
          <Number 
            button={props.keys[16]}
            handleClick={props.handleClick} />
          <Action 
            button={props.keys[5]}
            handleClick={props.handleClick} />
        </div>
        <div className="row">
          <Zero 
            button={props.keys[7]}
            handleClick={props.handleClick} />
          <Decimal 
            button={props.keys[17]}
            handleClick={props.handleClick} />
          <Equals 
            button={props.keys[6]}
            handleClick={props.handleClick} />
        </div>
      </div>
    </div>
  )
}

export default Calculator;