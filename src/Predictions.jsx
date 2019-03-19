import React, { Component } from 'react';

class Predictions extends Component {
  render() {
    return (
      <div>
        {this.props.predictions.map(prediction => (
          <div>{prediction}</div>
        ))}
      </div>
    )
  }
}

export default Predictions;