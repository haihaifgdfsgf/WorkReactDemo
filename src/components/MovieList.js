/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import MovieItem from './MovieItem';
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
} from 'react-native';

const BASE_WIN_HEIGHT = 667;
const BASE_WIN_WIDTH = 375;
const currentPixel = PixelRatio.get()  // 当前为iPhone6，值为2


type Props = {};
export default class MovieList extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            hostMovie: [],
        }
    }
    static navigationOptions = {
        headerTitleStyle:{alignSelf:'center',color:'red'},
        title:'pp',

    }
    componentDidMount() {
        this.fetchData();
        getWidth();
    }

    /**
     * 请求当前热映的电影
     */
    fetchData() {
        fetch('https://api.douban.com/v2/movie/in_theaters')
            .then(reponse => reponse.text())
            .then(reponseStr => {
                let result = JSON.parse(reponseStr);
                this.setState({
                    hostMovie: result.subjects,
                });
            })
            .catch(e => {
                alert(e);
            })
    }

    itemClick(item) {
        const {navigate} = this.props.navigation;
        navigate('MovieDetail');
    }

    render() {
        return (
            <View>
                <FlatList
                    columnWrapperStyle={styles.mflatlist}
                    numColumns={3}
                    data={this.state.hostMovie}
                    renderItem={({item}) => {
                        return (
                            <TouchableHighlight style={styles.lightitem}
                                                underlayColor={'#aaccff'}
                                                onPress={this.itemClick.bind(this, item)}><MovieItem
                                movie={item}/></TouchableHighlight>
                        );
                    }}
                    keyExtractor={item => item.id}
                ></FlatList>
            </View>

        );
    }
}

// 根据实际屏幕尺寸转换对应的像素宽度
function

getWidth(w) {
    if (!this.width) {
        const {height, width} = Dimensions.get('window');
        this.height = height;
        this.width = width;
    }
    return w * (this.width / BASE_WIN_WIDTH);
}

function

getHeight(h) {
    if (!this.height) {
        const {height, width} = Dimensions.get('window');
        this.height = height;
        this.width = width;
    }
    return h * (this.height / BASE_WIN_HEIGHT);
}

const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#aaccff',
            flexDirection: 'row',

        },
        column_box: {
            top: 0,
            left: 0,
            height: getWidth(375),
            width: 60,
            backgroundColor: '#ccaaee',
            position: 'absolute',
        },
        box: {
            bottom: 0,
            left: 0,
            height: 60,
            width: getWidth(375),
            backgroundColor: '#ccaaee',
            position: 'absolute',
        },
        item: {
            height: 100,
            width: 100,
            backgroundColor: 'red',
        },
        mflatlist: {
            flex: 1,
            backgroundColor: 'black'
        },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    