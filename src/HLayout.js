import React from 'react';
import Layout from './Layout';

const HLayout = props =>
    <Layout {...props} />;

HLayout.propTypes = {
    fill: React.PropTypes.bool
};

export default HLayout;
