'use strict'


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  BackAndroid,
  NativeModules,
  Animated,
  Image,
  ToastAndroid,
  ActivityIndicator,
  View
} from 'react-native';
import RnDemo from './react_native/demo/index';
var Log = NativeModules.LogNative;

var TAG = "===main scene === ";
export default class MainScene extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnScene:false,
      currentAlpha:0,
      fadeAnim:new Animated.Value(0),
      textAnim:new Animated.Value(1),
    };
  }

  componentDidMount() {
    var navigator = this.props.navigator;
    this.state.isOnScene = true;
    var _this = this;
    BackAndroid.addEventListener('hardwareBackPress', function() {
      Log.v(TAG + " back is on scene " + _this.state.isOnScene);
      if (navigator && navigator.getCurrentRoutes().length > 1) {
            Log.v(TAG + "====getCurrentRoutes()===" + (navigator.getCurrentRoutes().length));
            navigator.pop();
            return true;
          }
          return false;
      });
     this._startAnim();
  }

  render() {
    return (
    );
  }

  _pressButtoon() {
    const nav = this.props.navigator;
    if(nav) {
      this.state.isOnScene = false;
      Log.v(TAG + " is onscene " + this.state.isOnScene);
      nav.push(
        {
          component:RnDemo,
          params:{
            title:'React World',
            callback:function(data) {
              ToastAndroid.show('back data' + JSON.stringify(data),
              ToastAndroid.LONG);
            }
          }
        });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width:null,
    height:null
    // resizeMode:'strectch/contain'
  },
  main_text:{
    fontSize:20,
    color:'#ffffff'
  },

  button: {
    marginTop:20,
  },
  centering: {
   alignItems: 'center',
   justifyContent: 'center',
   padding: 8,
 },
 gray: {
   backgroundColor: '#cccccc',
 },
});
