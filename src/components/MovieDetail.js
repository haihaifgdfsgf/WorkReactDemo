import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    PixelRatio,
    Alert,
    Picker,
    FlatList,
    TouchableHighlight,
} from 'react-native'
export default class MovieDetail extends Component{
    constructor(){
        super();
    }
    static navigationOptions = {
        headerTitleStyle:{textAlign:'center',color:'red',backgroundColor:'black',flex:1},
        headerStyle:{height:0,backgroundColor:'pink',},
        title:'pp',
        headerMode: 'none',
    }
    render(){
        return(
            <Text>{'detail'}</Text>
        );
    }
}