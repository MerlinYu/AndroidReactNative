'use strict'

import React, {Component} from 'react';
import {

} from 'react-native';

export var Enhance  = ComposedComponent => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this.setState({data:'hello'});
  }

  render() {
    return (
      <ComposedComponent {...this.props} data={this.state.data} />
    );

  }

};
