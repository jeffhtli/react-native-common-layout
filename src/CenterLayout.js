import React from 'react-native';
import Layout from './Layout';

const CenterLayout = props => 
    <Layout {...props} style={{ justifyContent: 'center', alignItems: 'center' }} />

CenterLayout.propTypes = {
    ...Layout.propsTypes
}

export default CenterLayout;