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
  View
} from 'react-native';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';


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
    };
  }

  componentDidMount() {
    this.fetchData();
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
      <ListView dataSource = {this.state.dataSource}
      renderRow={this.renderMovie}
      style={styles.listView}/>

    );
  }


  renderLoadingView() {
    return (
      <View style={styles.container}>
      <Text>
      Loading movies....
      </Text>
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

  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  bascContainer: {
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
