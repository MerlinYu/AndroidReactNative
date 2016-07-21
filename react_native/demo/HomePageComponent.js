'use strict'

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import SearchComponent from './SearchComponent';


export default class HomePageComponet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id:2,
      user:null,

    };

  }

  _pressButton() {
    let _this = this;
    const {navigator} = this.props;
    if (navigator) {
      navigator.push({
        name : 'SearchComponent',
        component:SearchComponent,
        // 传递参数和回调函数
        params: {
          id: 10,
          getUser: function(user) {
            _this.setState({user:user})
          }
        }
      });
    }
  }

  render() {
    return(
      <View>
      <TouchableOpacity onPress={this._pressButton.bind(this)}>
      <Text>touch me and jump!</Text>
      </TouchableOpacity>
      </View>
    );
  }
}
