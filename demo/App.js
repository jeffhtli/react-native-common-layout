import React from 'react';
import Layout from './src/Layout';
import VLayout from './src/VLayout';
import HLayout from './src/HLayout';
import CenterLayout from './src/CenterLayout';
import {fillCol} from './src/styles';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <VLayout fill style={{paddingTop: 60}}>
        
        <VLayout style={{ backgroundColor: 'grey', width: 100, height: 100}}>
          
        </VLayout>
        
      </VLayout>
    );
  }
}

const GreenBox = props => <View style={{ height: 20, width: 100, backgroundColor: 'green', margin: 2 }} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  greyContainer: {
    backgroundColor: 'grey',
    padding: 10,
    height: 200,
    width: 200
  }
});
