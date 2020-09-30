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

    else if(button === "back"){
        this.back()
    }

    else if(button === "clear"){
        this.reset()
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
            result: (eval(checkResult))
            
        })
    } catch (e) {
        this.setState({
            result: "error"
        })
    }
    // this.reset();
};


  // reset to zero
  reset = () => {
      this.setState({
          result: ""
      })
  };

  //backspace
  back = () => {
      this.setState({
          result: this.state.result.slice(0, -1)
      })
  };

  render(){
      return(
          <div>
              <div className="calc">
                  <ResultsComponent result={this.state.result}/>
                  <KeyInputComponent onClick={this.onClick}/>
              </div>
          </div>
      );
  }
}


export default App;