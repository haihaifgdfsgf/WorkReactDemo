import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation'
import MovieList from './MovieList';
import MovieDetail from "./MovieDetail";
const RouterConfig = StackNavigator({
    Home: {
        screen: MovieList,
        navigationOptions: {
            headerTitle: 'MovieList',
        }
    },
    MovieDetail:{
        screen:MovieDetail,
    },
});
export default RouterConfig;