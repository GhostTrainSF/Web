import React, { Component } from 'react';

class Delays extends Component {
  render() {
    return (
      <div>
        {this.props.delays.map(delay => (
          <div>{delay}</div>
        ))}
      </div>
    )
  }
}

export default Delays;