import React, {Component} from 'react';
import {View,Image,StyleSheet,Text} from 'react-native'

 class MovieItem extends Component<Props> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{uri: this.props.movie.images.large}}
                />
                <Text>{this.props.movie.title}</Text>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        width:80,
        marginLeft:20,
       backgroundColor:'red'
    },
    image:{
        width:80,
        height:120,
    }

});
export default MovieItem;