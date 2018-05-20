import React, { Component } from 'react';
import {
  Box,
  Button,
  Text,
} from 'proton-native';


const LOC_MAP = {
  Farm: 10,
  Casino: -10,
  Dojo: 20,
};


export default class GoldGenerators extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.renderGoldBoxes = this.renderGoldBoxes.bind(this);
  }

  handleClick(location) {
    let gold_earned = LOC_MAP[location];
    this.props.updateGold(gold_earned);
  }

  renderGoldBoxes(location, id) {
    return(
      <Box key={id}>
        <Button
          onClick={this.handleClick}
          children={location}
          >
      </Box>
    );
  }

  render() {
    return(
      <Box
        vertical={false}
        >
        { Object.keys(LOC_MAP).map(this.renderGoldBoxes) }
      </Box>
    );
  }
}
