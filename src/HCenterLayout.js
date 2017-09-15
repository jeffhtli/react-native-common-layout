import React from 'react-native';
import Layout from './Layout';

const HCenterLayout = props =>
    <Layout {...props} style={props.vertical ? { alignItems: 'center' } : { justifyContent: 'center' }} />

HCenterLayout.propsTypes = {
    ...Layout.propsTypes
}

export default HCenterLayout;