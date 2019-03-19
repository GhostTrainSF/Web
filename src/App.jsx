import React, { Component } from 'react';
import Selectors from './Selectors.jsx';
import Predictions from './Predictions.jsx';
import Delays from './Delays.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      predictions: null,
      delays: null
    }
    this.updatePredictions = this.updatePredictions.bind(this);
    this.updateDelays = this.updateDelays.bind(this);
  }

  updatePredictions(predictions) {
    this.setState({predictions: predictions})
  }

  updateDelays(delays) {
    this.setState({delays: delays})
  }

  render() {
    return (
      <div>
        <h1>GhostTrain</h1>
          <Selectors updatePredictions={this.updatePredictions} updateDelays={this.updateDelays}/>
          {this.state.predictions && <Predictions predictions={this.state.predictions}/>} 
          {this.state.delays && <Delays delays={this.state.delays} />}
      </div>
    );
  }
}

export default App;
