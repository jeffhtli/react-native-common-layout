import React from 'react';
import Layout from './Layout';
import {fillColCenter} from './styles';

const CenterLayout = props =>
  <Layout {...props} style={[{alignItems: 'center', justifyContent: 'center'}, props.style]}/>;

CenterLayout.propTypes = {
  ...Layout.propTypes
};

export default CenterLayout;
