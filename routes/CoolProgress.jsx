import React, { Component } from 'react';
import CircularProgress from './CircularProgress.jsx'
import Odometer from './Odometer.jsx'

let size = 200;

export default class CoolProgress extends Component {

    state = { 
      percent: 72,
     }

  render() {
    return <div class="cool-progress">
      <div class="circle">
        <CircularProgress size={size} percent={this.state.percent/100} color="green"/>
      </div>
      <Odometer class="odometer" value={this.state.percent} />
    </div>

  }
}
