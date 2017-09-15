import React from 'react-native';
import Layout from './Layout';

const VCenterLayout = props => 
    <Layout {...props} style={props.vertical ? { justifyContent: 'center' } : { alignItems: 'center' }} />

VCenterLayout.propTypes = {
    ...Layout.propTypes
}

export default VCenterLayout;