import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView 
} from 'react-native';

import {
  Layout, 
  HLayout, 
  VLayout,
  HCenterLayout,
  VCenterLayout,
  CenterLayout,
  fillCol
} from "react-native-common-layout";

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={{marginTop: 15}}>
        <VLayout style={styles.greyContainer}>
          <GreenBox />
          <GreenBox />
          <GreenBox />
        </VLayout>

        <HLayout style={styles.greyContainer}>
          <GreenBox />
          <GreenBox />
          <GreenBox />
        </HLayout>

        <HCenterLayout style={styles.greyContainer}>
          <GreenBox />
          <GreenBox />
          <GreenBox />
        </HCenterLayout>

        <HCenterLayout vertical style={styles.greyContainer}>
          <GreenBox />
          <GreenBox />
          <GreenBox />
        </HCenterLayout>


        <VCenterLayout style={styles.greyContainer}>
          <GreenBox />
          <GreenBox />
          <GreenBox />
        </VCenterLayout>

        <VCenterLayout vertical style={styles.greyContainer}>
          <GreenBox />
          <GreenBox />
          <GreenBox />
        </VCenterLayout>

        <CenterLayout style={styles.greyContainer}>
          <GreenBox />
          <GreenBox />
          <GreenBox />
        </CenterLayout>

        <CenterLayout vertical style={styles.greyContainer}>
          <GreenBox />
          <GreenBox />
          <GreenBox />
        </CenterLayout>
      </ScrollView>
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
    marginTop: 10,  
    height: 80
  }
});
