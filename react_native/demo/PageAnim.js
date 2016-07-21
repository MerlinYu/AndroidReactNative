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
  Button,
  Navigator,
  View
} from 'react-native';


export default class PageAnim extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bounceValue:new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.state.bounceValue.setValue(1.0);
    Animated.spring(
      this.state.bounceValue, {toValue:0.8, friction:1,}
    ).start();
  }

  render() {
    return this.renderAnimView();
  }

  renderAnimView() {
    return (
      <Animated.Image
      source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
      style={{
        flex:1,
        transform:[
          {scale:this.state.bounceValue},
        ]
      }}
      />
    );
  }
}
