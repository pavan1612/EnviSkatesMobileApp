import React, { Component } from 'react';
import { WebView } from 'react-native-webview';


class Website extends Component {
    static navigationOptions = {
        title:"EnviSkates Website"
    }
    render() {
        return (
            <WebView source={{ uri: 'https://enviskates.web.app/' }} />
        );
    }
}
export default Website