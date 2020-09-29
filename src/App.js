import React from 'react';
import './App.css';
import ResultsComponent from './components/ResultsComponent';
import KeyInputComponent from './components/KeyInputComponent';

class App extends React.Component {
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
    var checkResult = ''
    if(this.state.result.includes('--')){
        checkResult = this.state.result.replace('--','+')
    }

    else {
        checkResult = this.state.result
    }

    try {
        this.setState({
            // eslint-disable-next-line
            result: (eval(checkResult) || "" ) + ""
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

  render(){
      return(
          <div>
              <div className="calculator-body">
                  <h1>Simple Calculator</h1>
                  <ResultsComponent result={this.state.result}/>
                  <KeyInputComponent onClick={this.onClick}/>
              </div>
          </div>
      );
  }
}


export default App;