import React, {Component} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import {row, col, fill as fillStyle} from './styles';

export default class Layout extends Component {

  static propTypes = {
    vertical: React.PropTypes.bool,
    fill: React.PropTypes.bool
  };

  static defaultProps = {
    vertical: false,
    fill: false
  };

  render() {
    const {vertical, fill, style, children} = this.props;

    return <View style={[
      vertical ? col : row,
      fill ? fillStyle : null,
      style]}>
      {children}
    </View>
  }
}
