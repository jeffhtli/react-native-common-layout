import React from 'react';
import Layout from './Layout';

const VLayout = props =>
  <Layout vertical {...props} />;

VLayout.propTypes = {
  fill: React.PropTypes.bool
};

export default VLayout;
