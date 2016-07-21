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
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class PageSimpleTab extends Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (<ScrollableTabView>
      <View tabLabel="hello" >
      <Text>hello </Text>
      </View>

      <View tabLabel="world">
      <Text> world! </Text>
      </View>
      </ScrollableTabView>
    );

  }


}
