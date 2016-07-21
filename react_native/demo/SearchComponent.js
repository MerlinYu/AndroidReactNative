'use strict'

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import HomePageComponent from './HomePageComponent';



export default class SearchComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        id: null
    };
  }

  componentDidMount() {
    this.setState({id: this.props.id});
  }

  _pressButton() {
    const {navigator} = this.props;
    if (this.props.getUser) {
      let user = 'merlin';
      this.props.getUser(user);
    }
    if (navigator) {

      navigator.pop();
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._pressButton.bind(this)}>
          <Text>touch me and go back! {this.state.id}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
