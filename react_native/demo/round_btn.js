'use strict'


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const TAG = "===round button=== ";
export default class MainScene extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      radius:this.props.radius ? this.props.radius :8,
      color:this.props.color ? this.props.color :'black',
      text:this.props.text ? this.props.text :'button',
    };
  }

  componentDidMount() {

  }

  render() {
    console.log(TAG + this.state.text.length);
    <View style={
      { borderColor:this.state.color,
        borderRadius:this.state.radius,
        borderStyle:'solid',
        borderWidth:2}
      }>

      <Text style={{fontSize:16}}>
        {this.state.text}
      </Text>
    </View>



  }

  setRadius(_radius){
    this.setState({radius:_radius});
  }

  setBorderColor(_color) {
    this.setState({color:_color});
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
