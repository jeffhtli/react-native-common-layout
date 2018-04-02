import React from 'react';
import Layout from './Layout';
import PropTypes from 'prop-types';

const HLayout = props =>
    <Layout {...props} />;

HLayout.propTypes = {
    fill: PropTypes.bool
};

export default HLayout;
