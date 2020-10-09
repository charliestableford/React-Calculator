import React, {useState} from 'react';

function ResultsComponent() {

    // render(){
        const {result} = useState("");

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