import React from 'react';
import { View, ViewPropTypes } from 'react-native';

const Layout = ({ vertical, fill, children, style }) => {
    const viewStyle = { flexDirection: vertical ? 'column' : 'row' };
    if (fill) {
        viewStyle.flex = 1;
    }

    return <View style={[viewStyle, style]}>
        {children}
    </View>
};

Layout.propsTypes = {
    ...ViewPropTypes,
    vertical: React.PropTypes.bool,
    fill: React.PropTypes.bool
};

Layout.defaultProps = {
    vertical: false,
    fill: false
};

export default Layout;
