import React, { Component } from 'react';
import SelectRoute from './SelectRoute.jsx';
import SelectStation from './SelectStation.jsx';
import axios from 'axios';

class Selectors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: [
        'J - Inbound',
        'J - Outbound',
        'KT - Inbound',
        'KT - Outbound',
        'L - Inbound',
        'L - Outbound',
        'M - Inbound',
        'M - Outbound',
        'N - Inbound',
        'N - Outbound',
      ],
      line: null, 
      direction: null,
      stationTag: null,
      stations: null
    }
    this.routeSelect = this.routeSelect.bind(this);
    this.stationSelect = this.stationSelect.bind(this);
    this.getStations = this.getStations.bind(this);
  }

  getStations() {
    axios.get(`http://ec2-3-18-105-71.us-east-2.compute.amazonaws.com/v1/api/stations/${this.state.line}/${this.state.direction}`)
    .then(response => {
      this.setState({stations: response.data});
    })
    .catch(error => console.log(error));
  }

  getPredictions() {
    axios.get(`http://ec2-3-18-105-71.us-east-2.compute.amazonaws.com/v1/api/predictions/${this.state.line}/${this.state.stationTag}`)
    .then(response => {
      this.props.updatePredictions(response.data);
    })
    .catch(error => console.log(error));
  }

  getDelays() {
    axios.get(`http://ec2-3-18-105-71.us-east-2.compute.amazonaws.com/v1/api/initDelay/${this.state.line}/${this.state.stationTag}`)
    .then(response => {
      this.props.updateDelays(response.data);
    })
    .catch(error => console.log(error));
  }
  
  routeSelect(route) {
    route = route.split('-');
    this.setState({
      line: route[0].trim(),
      direction: route[1].trim().toLowerCase()
    }, this.getStations); 
  }

  stationSelect(stationTag) {
    this.setState({
      stationTag: stationTag
    }, () => {
      this.getPredictions();
      this.getDelays();
    });
  }

  render() {
    return (
      <div>
        <SelectRoute routes={this.state.routes} routeSelect={this.routeSelect} />
        {this.state.stations && <SelectStation stations={this.state.stations} stationSelect={this.stationSelect}/>}
      </div>
    )
  }
}

export default Selectors;