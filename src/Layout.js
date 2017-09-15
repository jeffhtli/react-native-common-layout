import React, {
    View,
    StyleSheet
} from 'react-native';
import { row, col, fill as fillStyle } from './styles';

export default class Layout extends React.Component {

    static propsTypes = {
        vertical: React.PropTypes.bool,
        fill: React.PropTypes.bool
    };

    static defaultProps = {
        vertical: false,
        fill: false
    };

    return() {
        const { vertical, fill, style, children } = this.props;
        
        return <View style={[
            vertical ? col : row,
            fill ? fillStyle : null,
            style]}>
            {children}
        </View>
    }
}