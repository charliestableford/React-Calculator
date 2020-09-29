import React, {Component} from 'react';
import './App.css';
import Results from './components/Results';
import KeyInput from './components/KeyInput';

class App extends Component {
  constructor(){
    super();

    this.state = {
        result: ""
    }
}

onClick = button => {

    if(button === "="){
        this.calculate()
    }

    else if(button === "C"){
        this.reset()
    }
    else if(button === "CE"){
        this.backspace()
    }

    else {
        this.setState({
            result: this.state.result + button
        })
    }
};

  
// calculate
  calculate = () => {
      try {
          this.setState({
              // eslint-disable-next-line
              result: (eval(this.state.result) || "" ) + ""
          })
      } catch (e) {
          this.setState({
              result: "error"
          })

      }
  };

  // reset to zero
  reset = () => {
      this.setState({
          result: ""
      })
  };

  // clear last character
  backspace = () => {
      this.setState({
          result: this.state.result.slice(0, -1)
      })
  };

  render() {
      return (
          <div>
              <div className="calculator-body">
                  <h1>Simple Calculator</h1>
                  <Results result={this.state.result}/>
                  <KeyInput onClick={this.onClick}/>
              </div>
          </div>
      );
  }
}

export default App;