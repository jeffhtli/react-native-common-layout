import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet
} from 'react-native';
import {row, col, fill as fillStyle} from './styles';

export default class Layout extends Component {

  static propTypes = {
    vertical: PropTypes.bool,
    fill: PropTypes.bool
  };

  static defaultProps = {
    vertical: false,
    fill: false
  };

  render() {
    const {vertical, fill, style, children} = this.props;

    return <View {...this.props} style={[
      vertical ? col : row,
      fill ? fillStyle : null,
      style]} />
  }
}
