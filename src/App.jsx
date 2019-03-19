import React, { Component } from 'react';
import Selectors from './Selectors.jsx';
import Predictions from './Predictions.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      predictions: null
    }
    this.updatePredictions = this.updatePredictions.bind(this);
  }

  updatePredictions(predictions) {
    this.setState({predictions: predictions})
  }

  render() {
    return (
      <div>
        <h1>GhostTrain</h1>
          <Selectors updatePredictions={this.updatePredictions}/>
          {this.state.predictions && <Predictions predictions={this.state.predictions}/>} 
      </div>
    );
  }
}

export default App;
