import React from 'react';
import Layout from './Layout';

const HCenterLayout = props =>
  <Layout {...props} style={[props.vertical ? {alignItems: 'center'} : {justifyContent: 'center'}, props.style]}/>;


HCenterLayout.propTypes = {
  ...Layout.propTypes
};

export default HCenterLayout;
