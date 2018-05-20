import React, { Component } from 'react';
import {
  Area,
  Box,
  Text,
} from 'proton-native';

export default class InfoBox extends Component {
  render() {
    const { gold } = this.props;
    return(
      <Box
        vertical={false}
        >
        <Text>{`Current gold: ${gold}`}</Text>
      </Box>
    );
  }
}
