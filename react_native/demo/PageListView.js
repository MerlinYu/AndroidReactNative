/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Animated,
  ListView,
  Navigator,
  BackAndroid,
  NativeModules,
  TouchableOpacity,
  View
} from 'react-native';

import TitleBar from './TitleBar';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var Log = NativeModules.LogNative;
var TAG ="=====page list view === ";

export default class PageListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged:(row1,row2) => row1!=row2,
      }),
      loaded: false,
      movies: null,
      total:0,
      isOnScene:false,
    };
  }

  componentDidMount() {
    var navigator = this.props.navigator;
    var back_index = this.props.back_index;
    this.state.isOnScene = true;
    var isOnScene = this.state.isOnScene;

    //返回键监听，需优化
    BackAndroid.addEventListener('hardwareBackPress', function() {
      Log.v(TAG + " back is on scene" + isOnScene);
          if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
          }
          return false;
      });
    this.fetchData();
  }

  componentWillUnmount() {
    this.state.isOnScene = false;
    BackAndroid.removeEventListener('hardwareBackPress');
  }

  fetchData() {
      fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            dataSource:this.state.dataSource.cloneWithRows(responseData.movies),
            loaded:true,
            movies: responseData.movies,
            total:responseData.total
          });
        })
        .done();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return(
      <View style= {styles.base_container}>
        <TitleBar back={true} title={"movies"} onBack={this._pressBack.bind(this)}>
        </TitleBar>
        <ListView
        dataSource = {this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.list_container}/>
      </View>
    );
  }

  _pressBack() {
    const navigator = this.props.navigator;
    if (navigator) {
      navigator.pop();
    }
  }

  renderLoadingView() {
    return (
      <View style= {styles.base_container}>
      <TitleBar back={true} title={"movies"} onBack={this._pressBack.bind(this)} >
      </TitleBar>
        <View style= {styles.middle_container}>
          <Text >
              Loading movies....
          </Text>
        </View>
      </View>
    );
  }


  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <Image
        source={{uri:movie.posters.thumbnail}}
        style={imageStyles.imageSize}/>
        <View style={textStyles.textContainer}>
          <Text style={styles.welcome}>
            {movie.title}
          </Text>
          <Text style={styles.instructions}>
            {movie.year}
          </Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({

  base_container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#ffffff',
  },
  top_container:{
    height:40,
    backgroundColor: '#a94e00'
  },

  middle_container:{
    flex:1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_container:{
    height:40,
    backgroundColor: '#a94e00'
  },

  list_container:{
    flexDirection:'column',
    marginTop:10,
    marginLeft:10,
    marginRight:10,
  },

  container: {
    flexDirection:'row',
    backgroundColor: '#ffffff',
  },


  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    // paddingTop: 20,
    marginTop:20,
    marginLeft:20,
    marginRight:20,
  },
});

const textStyles = StyleSheet.create({
  textContainer: {
    flex:1,
    flexDirection:'column',
  },
});

const imageStyles = StyleSheet.create({
  imageContainer: {
    flex:1,
    backgroundColor:'#000000'
  },
  imageSize: {
    width:40,
    height:80,
  },
});
