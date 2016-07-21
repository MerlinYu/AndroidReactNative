'use strict'

import React,{Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  CustomBadgeView,
  Text,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabNavigator from 'react-native-tab-navigator';

export default class PageTab extends Component {


  static defaultProps = {
 };

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    // selectedTabIcons:React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    // setstate 时会刷新UI
    this.state = {

    }
    this.selectedTabIcons = [];
    this.unselectedTabIcons =[];
  }

  componentDidMount() {
  }

  render() {
    return (
      <View>
        <Text>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:10,
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },

});
