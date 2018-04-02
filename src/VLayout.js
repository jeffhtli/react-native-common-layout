import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';

const VLayout = props =>
  <Layout vertical {...props} />;

VLayout.propTypes = {
  fill: PropTypes.bool
};

export default VLayout;
