import React, {Component} from 'react';
import './App.css';
import Calculator from './Components/Calculator'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: [
        {
          id: 'clear',
          display: 'C',
          keyCode: 67
        },
        {
          id: 'clearOne',
          display: '<-',
          keyCode: 8
        },
        {
          id: 'divide',
          display: '/',
          keyCode: 111
        },
        {
          id: 'multiply',
          display: '*',
          keyCode: 106
        },
        {
          id: 'subtract',
          display: '-',
          keyCode: 109
        },
        {
          id: 'add',
          display: '+',
          keyCode: 107
        },
        {
          id: 'equals',
          display: '=',
          keyCode: 48
        },
        {
          id: 'zero',
          display: '0',
          keyCode: 96
        },
        {
          id: 'one',
          display: '1',
          keyCode: 97
        },
        {
          id: 'two',
          display: '2',
          keyCode: 98
        },
        {
          id: 'three',
          display: '3',
          keyCode: 99
        },
        {
          id: 'four',
          display: '4',
          keyCode: 100
        },
        {
          id: 'five',
          display: '5',
          keyCode: 101
        },
        {
          id: 'six',
          display: '6',
          keyCode: 102
        },
        {
          id: 'seven',
          display: '7',
          keyCode: 103
        },
        {
          id: 'eight',
          display: '8',
          keyCode: 104
        },
        {
          id: 'nine',
          display: '9',
          keyCode: 105
        },
        {
          id: 'decimal',
          display: '.',
          keyCode: 110
        },
        {
          id: 'modulo',
          display: '%',
          keyCode: 53
        }
      ],
      result: '0',
      count: '0',
      realCount: 0
    }
    this.handleClick = this.handleClick.bind(this);
    
  }

  handleBothZero = (element) => {
    switch(element.id) {
      case 'one':
      case 'two':
      case 'three':
      case 'four':
      case 'five':
      case 'six':
      case 'seven':
      case 'eight':
      case 'nine':
        this.setState({
          result: element.display,
          count: element.display
        })
        break;
      case 'decimal':
        this.setState({
          result: '0.',
          count: '0.'
        })
        break;
      case 'modulo':
      case 'divide':
      case 'multiply':
      case 'subtract':
      case 'add':
        this.setState({
          result: element.display,
          count: '0' + element.display
        })
        break;
      case 'equals':
        this.setState({
          count: '0=0'
        })
        break;
    }
  }

  handleResultZero = (element, count, result) => {
    switch(count.charAt(count.length - 1)) { //check what is the last digit in count
      case '%':
      case '/':
      case '*':
      case '+':
        switch(element.id) { //check what is being pressed
          case 'zero':
          case 'one':
          case 'two':
          case 'three':
          case 'four':
          case 'five':
          case 'six':
          case 'seven':
          case 'eight':
          case 'nine':
            this.setState((prevState) => ({
              result: element.display,
              count: prevState.count + element.display
            }))
            break;
          case 'modulo':
          case 'divide':
          case 'multiply':
          case 'add':
            this.setState((prevState) => ({
              result: element.display,
              count: prevState.count.substring(0, prevState.count.length - 1)
            }))
            break;
          case 'subtract':
            this.setState((prevState) => ({
              result: element.display,
              count: prevState.count + element.display
            }))
            break;
          case 'clear':
            this.setState({
              count: '0'
            })
            break;
          case 'clearOne':
            if(result.length === 1 && result !== '0' && count.length === 1) {
              this.setState({
                result: '0',
                count: '0'
              })
            } else if(result.length === 1 && result !== '0') {
              this.setState((prevState) => ({
                result: '0',
                count: prevState.count.substring(0, prevState.count.length - 1)
              }));
            } else if(result.length > 1) {
              this.setState((prevState) => ({
                result: prevState.result.substring(0, prevState.result.length - 1),
                count: prevState.count.substring(0, prevState.count.length - 1)
              }));
            }
            break;
          case 'equals':
            const realCountConst = eval(count.substring(0, count.length - 1));
            if(realCountConst === Infinity) {
              this.setState((prevState) => ({
                realCount: 'Undefined',
                result: 'Undefined',
                count: prevState.count.substring(0, prevState.count.length - 1) + element.display + 'Undefined'
              }))
            }
            this.setState((prevState) => ({
              realCount: realCountConst,
              result: realCountConst,
              count: prevState.count.substring(0, prevState.count.length - 1) + element.display + realCountConst
            }))
            break;
        }
        break;
      case '-':
        switch(element.id){
          case 'zero':
          case 'one':
          case 'two':
          case 'three':
          case 'four':
          case 'five':
          case 'six':
          case 'seven':
          case 'eight':
          case 'nine':
            this.setState((prevState) => ({
              result: element.display,
              count: prevState.count + element.display
            }))
            break;
          case 'modulo':
          case 'divide':
          case 'multiply':
          case 'subtract':
          case 'add':
            this.setState((prevState) => ({
              result: element.display,
              count: prevState.count.substring(0, prevState.count.length - 1) + element.display
            }))
            break;
          case 'clear':
            this.setState({
              count: '0'
            })
            break;
          case 'clearOne':
            if(result.length === 1 && result !== '0' && count.length === 1) {
              this.setState({
                result: '0',
                count: '0'
              })
            } else if(result.length === 1 && result !== '0') {
              this.setState((prevState) => ({
                result: '0',
                count: prevState.count.substring(0, prevState.count.length - 1)
              }));
            } else if(result.length > 1) {
              this.setState((prevState) => ({
                result: prevState.result.substring(0, prevState.result.length - 1),
                count: prevState.count.substring(0, prevState.count.length - 1)
              }));
            }
            break;
          case 'equals':
            const realCountConst = eval(count.substring(0, count.length - 1));
            if(realCountConst === Infinity) {
              this.setState((prevState) => ({
                realCount: 'Undefined',
                result: 'Undefined',
                count: prevState.count.substring(0, prevState.count.length - 1) + element.display + 'Undefined'
              }))
            } else {
              this.setState((prevState) => ({
                realCount: realCountConst,
                result: realCountConst,
                count: prevState.count.substring(0, prevState.count.length - 1) + element.display + realCountConst
              }))
            }
            break;
        }
        break;
      case '0':
        switch(element.id) {
          case 'zero':
          case 'one':
          case 'two':
          case 'three':
          case 'four':
          case 'five':
          case 'six':
          case 'seven':
          case 'eight':
          case 'nine':
            this.setState((prevState) => ({
              result: element.display,
              count: prevState.count.substring(0, prevState.count.length - 1) + element.display
            }))
            break;
          case 'modulo':
          case 'divide':
          case 'multiply':
          case 'subtract':
          case 'add':
            this.setState((prevState) => ({
              result: element.display,
              count: prevState.count + element.display
            }))
            break;
          case 'clear':
            this.setState({
              result: '0',
              count: '0'
            })
            break;
          case 'clearOne':
            if(result.length === 1 && result !== '0' && count.length === 1) {
              this.setState({
                result: '0',
                count: '0'
              })
            } else if(result.length === 1 && result !== '0') {
              this.setState((prevState) => ({
                result: '0',
                count: prevState.count.substring(0, prevState.count.length - 1)
              }));
            } else if(result.length > 1) {
              this.setState((prevState) => ({
                result: prevState.result.substring(0, prevState.result.length - 1),
                count: prevState.count.substring(0, prevState.count.length - 1)
              }));
            }
            break;
          case 'equals':
            const realCountConst = eval(count);
            if(realCountConst === Infinity) {
              this.setState((prevState) => ({
                realCount: 'Undefined',
                result: 'Undefined',
                count: prevState.count + element.display + 'Undefined'
              }))
            } else {
              this.setState((prevState) => ({
                realCount: realCountConst,
                result: realCountConst,
                count: prevState.count + element.display + realCountConst
              }))
            }
            break;
          case 'decimal':
            this.setState((prevState) => ({
              result: prevState.result + element.display,
              count: prevState.count + element.display
            }))
            break;
        }
        break;
    }
  }

  handleNoneZero = (element, count, result) => {
    const countLastElement = count.charAt(count.length - 1);
    let resultLastElement;
    if (result.length > 1) {
      resultLastElement = result.charAt(result.length - 1);
    }
    if (!isNaN(countLastElement) && !isNaN(result)) { //if both are numbers
      switch(element.id) {
        case 'zero':
        case 'one':
        case 'two':
        case 'three':
        case 'four':
        case 'five':
        case 'six':
        case 'seven':
        case 'eight':
        case 'nine':
          if(count.includes('=')) {
            this.setState({
              result: element.display,
              count: element.display
            })
          } else {
            this.setState((prevState) => ({
              result: prevState.result + element.display,
              count: prevState.count + element.display
            }))
          }
          break;
        case 'decimal':
          if(!result.includes('.')) {
            this.setState((prevState) => ({
              result: prevState.result + element.display,
              count: prevState.count + element.display
            }))
          }
          break;
        case 'modulo':
        case 'divide':
        case 'multiply':
        case 'subtract':
        case 'add':
          if(count.includes('=')) {
            this.setState((prevState) => ({
              result: element.display,
              count: prevState.result + element.display
            }))
          } else {
            this.setState((prevState) => ({
              result: element.display,
              count: prevState.count + element.display
            }))
          }
          break;
        case 'clear':
          this.setState({
            result: '0',
            count: '0',
            realCount: 0
          })
          break;
        case 'clearOne':
          if(result.length === 1 && result !== '0' && count.length === 1) {
            this.setState({
              result: '0',
              count: '0'
            })
          } else if(result.length === 1 && result !== '0') {
            this.setState((prevState) => ({
              result: '0',
              count: prevState.count.substring(0, prevState.count.length - 1)
            }));
          } else if(count.includes('=')) {
            this.setState({
              result: '0',
              count: '0'
            })
          } else if(result.length > 1) {
            this.setState((prevState) => ({
              result: prevState.result.substring(0, prevState.result.length - 1),
              count: prevState.count.substring(0, prevState.count.length - 1)
            }));
          }
          break;
        case 'equals':
          if (!count.includes('=')) {
            const realCountConst = eval(count);
            if(realCountConst === Infinity) {
              this.setState((prevState) => ({
                realCount: 'Undefined',
                result: 'Undefined',
                count: prevState.count + element.display + 'Undefined'
              }))
            } else {
              this.setState((prevState) => ({
                realCount: realCountConst,
                result: realCountConst,
                count: prevState.count + element.display + realCountConst
              }))
            }
          }
          break;
      }
    } else if ((countLastElement === '%' || countLastElement === '/' || countLastElement === '*' || countLastElement === '+') 
                && (result === '%' || result === '/' || result === '*' || result === '+')) {
      switch(element.id) {
        case 'zero':
        case 'one':
        case 'two':
        case 'three':
        case 'four':
        case 'five':
        case 'six':
        case 'seven':
        case 'eight':
        case 'nine':
          this.setState((prevState) => ({
            result: element.display,
            count: prevState.count + element.display
          }))
          break;
        case 'decimal':
          if(!result.includes('.')) {
            this.setState((prevState) => ({
              result: '0' + element.display,
              count: prevState.count + '0' + element.display
            }))
          }
          break;
        case 'modulo':
        case 'divide':
        case 'multiply':
        case 'add':
          this.setState((prevState) => ({
            result: element.display,
            count: prevState.count.substring(0, prevState.count.length - 1) + element.display
          }))
          break;
        case 'subtract':
          this.setState((prevState) => ({
            result: element.display,
            count: prevState.count + element.display
          }))
          break;
        case 'clear':
          this.setState({
            result: '0',
            count: '0',
            realCount: 0
          })
          break;
        case 'clearOne':
          this.setState((prevState) => ({
            result: '0',
            count: prevState.count.substring(0, prevState.count.length - 1)
          }))
          break;
        case 'equals':
          const realCountConst = eval(count.substring(0, count.length - 1));
          if(realCountConst === Infinity) {
            this.setState((prevState) => ({
              realCount: 'Undefined',
              result: 'Undefined',
              count: prevState.count.substring(0, prevState.count.length - 1) + element.display + 'Undefined'
            }))
          } else {
            this.setState((prevState) => ({
              realCount: realCountConst,
              result: realCountConst,
              count: prevState.count.substring(0, prevState.count.length - 1) + element.display + realCountConst
            }))
          }
          break;
      }
    } else if (countLastElement === '-' && result === '-') {
      switch(element.id) {
        case 'zero':
        case 'one':
        case 'two':
        case 'three':
        case 'four':
        case 'five':
        case 'six':
        case 'seven':
        case 'eight':
        case 'nine':
          this.setState((prevState) => ({
            result: element.display,
            count: prevState.count + element.display
          }))
          break;
        case 'decimal':
          if(!result.includes('.')) {
            this.setState((prevState) => ({
              result: '0' + element.display,
              count: prevState.count + '0' + element.display
            }))
          }
          break;
        case 'modulo':
        case 'divide':
        case 'multiply':
        case 'subtract':
        case 'add':
          if(!isNaN(count.charAt(count.length - 2)) || count.charAt(count.length - 2) === '.') { //Check if char before - sign is a number
            this.setState((prevState) => ({
              result: element.display,
              count: prevState.count.substring(0, prevState.count.length - 1) + element.display
            }));
          } else {
            this.setState((prevState) => ({
              result: element.display,
              count: prevState.count.substring(0, prevState.count.length - 2) + element.display
            }))
          }
          break;
        case 'clear':
          this.setState({
            result: '0',
            count: '0',
            realCount: 0
          })
          break;
        case 'clearOne':
          this.setState((prevState) => ({
            result: '0',
            count: prevState.count.substring(0, prevState.count.length - 1)
          }))
          break;
        case 'equals':
          const realCountConst = eval(count.substring(0, count.length - 1));
          if(realCountConst === Infinity) {
            this.setState((prevState) => ({
              realCount: 'Undefined',
              result: 'Undefined',
              count: prevState.count.substring(0, prevState.count.length - 1) + element.display + 'Undefined'
            }))
          } else {
            this.setState((prevState) => ({
              realCount: realCountConst,
              result: realCountConst,
              count: prevState.count.substring(0, prevState.count.length - 1) + element.display + realCountConst
            }))
          }
          break;
      }
    } else if(countLastElement === '.' && resultLastElement === '.') {
      switch(element.id) {
        case 'zero':
        case 'one':
        case 'two':
        case 'three':
        case 'four':
        case 'five':
        case 'six':
        case 'seven':
        case 'eight':
        case 'nine':
          this.setState((prevState) => ({
            result: prevState.result + element.display,
            count: prevState.count + element.display
          }))
          break;
        case 'modulo':
        case 'divide':
        case 'multiply':
        case 'subtract':
        case 'add':
          this.setState((prevState) => ({
            result: element.display,
            count: prevState.count + element.display
          }))
          break;
        case 'clear':
          this.setState({
            result: '0',
            count: '0',
            realCount: 0
          })
          break;
        case 'clearOne':
          this.setState((prevState) => ({
            result: prevState.result.substring(0, prevState.count.length - 1),
            count: prevState.count.substring(0, prevState.count.length - 1)
          }))
          break;
        case 'equals':
          const realCountConst = eval(count.substring(0, count.length - 1));
          if(realCountConst === Infinity) {
            this.setState((prevState) => ({
              realCount: 'Undefined',
              result: 'Undefined',
              count: prevState.count.substring(0, prevState.count.length - 1) + element.display + 'Undefined'
            }))
          } else {
            this.setState((prevState) => ({
              realCount: realCountConst,
              result: realCountConst,
              count: prevState.count.substring(0, prevState.count.length - 1) + element.display + realCountConst
            }))
          }
          break;
      }
    }
  }

  handleUndefined = (element) => {
    switch(element.id) {
      case 'zero':
      case 'one':
      case 'two':
      case 'three':
      case 'four':
      case 'five':
      case 'six':
      case 'seven':
      case 'eight':
      case 'nine':
        this.setState({
          result: element.display,
          count: element.display
        })
        break;
      case 'clear':
        this.setState({
          result: '0',
          count: '0'
        })
        break;
      case 'clearOne':
        this.setState({
          result: '0',
          count: '0'
        })
        break;
    }
  }

  handleClick(e) {
    const element = this.state.keys.find(obj => obj.id === e.target.id);
    console.log(element);
    const result = this.state.result;
    const count = this.state.count;
    if ((result === '0' && count === '0') || (result === '0' && count === '0=0')) {
      this.handleBothZero(element);
    } else if (result === 'Undefined') {
      this.handleUndefined(element);
    } else if (result === '0') {
      this.handleResultZero(element, count, result);
    } else if (result !== '0' && count !== '0') {
      this.handleNoneZero(element, count, result);
    } 
  }

  render() {
    return (
      <div className="App container">
        <Calculator 
          keys={this.state.keys}
          result={this.state.result}
          count={this.state.count}
          handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
