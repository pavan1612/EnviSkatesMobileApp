import React, { Component } from 'react';
import { WebView } from 'react-native-webview';


class ProductDescScreen extends Component {
    static navigationOptions = {
        title:"External website"
    }
    render() {
        return (
            <WebView source={{ uri: 'https://www.evolveskateboards.com.au/pages/all-series' }} />
        );
    }
}
export default ProductDescScreen