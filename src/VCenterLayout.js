import React from 'react';
import Layout from './Layout';

const VCenterLayout = props => 
    <Layout {...props} style={[props.vertical ? { justifyContent: 'center' } : { alignItems: 'center' }, props.style]} />

VCenterLayout.propTypes = {
    ...Layout.propTypes
}

export default VCenterLayout;