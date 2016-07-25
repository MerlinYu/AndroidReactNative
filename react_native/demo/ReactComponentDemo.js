'use strict'


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ToastAndroid,
  Slider,
  TextInput,
  TouchableNativeFeedback,
  TouchableHighlight,
  Picker,
  Switch,
  View
} from 'react-native';

var TAG = "===main scene === ";

export default class ReactComponentDemo extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnScene:false,
      sliderNumber:0.5,
      text:null,
      falseSwitchIsOn:false,
      trueSwitchIsOn: true,
      language:null,
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      //http://facebook.github.io/react-native/releases/0.26/docs/view.html#props
      // view 属性

      <View>
        <Text>{this.state.sliderNumber}</Text>
        <Slider value={0.5} step = {0.1} maximumValue = {1} minimumValue = {0}
        // 滑动过程中调用
        onValueChage={(value) => {}}
        // 滑动完成后调用
        onSlidingComplete={(value) => {
          this.setState({sliderNumber:value});
        }}
        />
        <View style={{borderColor:'gold',borderRadius:5,borderStyle:'solid',borderWidth:2}}>
          <TextInput
            multiline = {false}
            style={{height: 40, borderColor: 'gray', borderWidth: 1,margin:5,}}
            placeholder="Enter text to see events"
              />
        </View>

        <Picker
          selectedValue={this.state.language}
          style ={{width:300}}
          // android 特性 enum{'dialog','dropdown'}
          mode={"dropdown"}
          onValueChange={(lang) => this.setState({language: lang})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>

        <TouchableNativeFeedback
           onPress={this._onPressButton}
           background={TouchableNativeFeedback.SelectableBackground()}>
         <View style={{width: 100, height: 60, backgroundColor: 'gray'}}>
           <Text style={{margin: 20}}>Button</Text>
         </View>
       </TouchableNativeFeedback>

       <View>
        <Switch
          onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
          style={{marginBottom: 10}}
          value={this.state.falseSwitchIsOn} />
        <Switch
          onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
          value={this.state.trueSwitchIsOn} />
      </View>

        <TouchableHighlight>
        <Text style={{backgroundColor:'green', width:100,height:50,fontSize:20}}>press me!</Text>
        </TouchableHighlight>

      </View>
    );
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
