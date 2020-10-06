import React, {useState} from 'react';

function ResultsComponent() {

    // render(){
        let {result} = useState("");
        return (
            <div className = "wrapper">
                <div className = "leftRes"></div>
            <div className = "result">
                <p>{result}</p>
            </div>
            </div>
        );
    }
// }

export default ResultsComponent;