import React, { Component } from 'react';

class SelectRoute extends Component {
  render () {
    return (
      <div>
        <select onChange={event => this.props.routeSelect(event.target.value)}>
          <option selected disabled>Select Route:</option>
          {this.props.routes.map(route => (
            <option>{route}</option>
          ))}
        </select>
      </div>
    )
  }
}

export default SelectRoute;