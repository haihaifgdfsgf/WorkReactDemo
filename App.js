import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    TouchableOpacity,
    StatusBar,
    ListView,
    Image,
    RefreshControl,
    ScrollView,
} from 'react-native';
import {YellowBox} from 'react-native';
import MyTab from './src/components/MyTab'
import RouterConfig from './src/components/RouterConfig'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
type Props = {};
const QUERY_URL = 'https://api.douban.com/v2/movie/top250';
export default class App extends Component<Props> {
    constructor(props) {
        super(props)

    }


    render() {
        return (
                <RouterConfig></RouterConfig>
        );
    }
}

const styles = StyleSheet.create({});