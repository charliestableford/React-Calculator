import React, { useState } from 'react';
import './App.css';
import ResultsComponent from './components/ResultsComponent';
import KeyInputComponent from './components/KeyInputComponent';

function App() {
    // setting a new state variable
    const [result, setVal] = useState("");

    // function Button({ onClick }) {
     
            onClick = button => {
                if (button === "=") {
                    handleClick();
                }

                    else if(button === "back"){
                        back()
                    }
                    else if(button === "sq"){
                        squareRt()
                    }
                    else if(button === "clear"){
                        reset()
                    }
                    else if(button === "round"){
                        round()
                    }
                    else {
                        setVal({
                            result: result + button
                        })
                    }
            };
    // }

  
// calculate
  handleClick = () => {
    const checkResult = ''
    checkResult = result

    // does all error handling happen with ty and catch?
    try {
        setVal({
            // eslint-disable-next-line
            result: (eval(checkResult)) 
        })
    } catch (e) {
        setVal({
            result: "error"
        })
    }
};


//   reset to zero
  reset = () => {
      setVal({
          result: ""
      })
  };

  //backspace
  back = () => {
      setVal({
          result: slice(0, -1)
      })
  };

  //square root
  squareRt = () =>{
      setVal({
          result: Math.sqrt(result)
      })
  };

  //round
  round = () => {
      setVal({
          result: Math.round(result)
      })
  }

//   render(){
      return(
          <div>
              <div className="title">TI-180 Calculator excercise</div>
              <div className="calc">
                  <ResultsComponent result={result}/>
                  <KeyInputComponent onClick={onClick}/>
              </div>
          </div>
      );
  }
// }

export default App;