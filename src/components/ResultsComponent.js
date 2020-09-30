import React from 'react';

class ResultsComponent extends React.Component {

    render(){
        let {result} = this.props;
        return (
            <div className = "wrapper">
                <div className = "leftRes"></div>
            <div className = "result">
                <p>{result}</p>
            </div>
              <div className = "rightRes"></div>
            </div>
        );
    }
}

export default ResultsComponent;