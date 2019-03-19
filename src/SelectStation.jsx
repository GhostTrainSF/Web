import React, { Component } from 'react';

class SelectStation extends Component {
  render () {
    return (
      <div>
        <select onChange={event => this.props.stationSelect(event.target.value)}>
          <option selected disabled>Select Station:</option>
          {this.props.stations.map(station => (
            <option value={station.tag}>{station.title}</option>
          ))}
        </select>
      </div>
    )
  }
}

export default SelectStation;