'use strict'


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  NativeModules,
  TouchableOpacity,
  View
} from 'react-native';

export default class TitleBar extends Component {

  static propTypes = {
    title:React.PropTypes.string,
    back:React.PropTypes.bool,
    onBack:React.PropTypes.func,
    backImage:React.PropTypes.object
  }

  componentDidMount() {
  }

  render() {
    let titleView;
    if (this.props.title) {
      titleView = (
        <View style={styles.titl_container}>
        <Text style = {styles.title}>
        {this.props.title}
        </Text>
        </View>
      );
    }
    let backView;
    if (this.props.back) {
      if (this.props.backImage) {
        backView = this.props.backImage;
      } else {
        backView = (<TouchableOpacity style = {styles.back_container} onPress={this.props.onBack}>
          <Text style = {styles.back}>
            back
          </Text>
        </TouchableOpacity>);
      }
    }

    return (
      <View style = {styles.container} >
        <View style = {styles.base_container}>
        {backView}
        {titleView}
        </View>
        <View style = {styles.divide} />
      </View>
    );
  }
}

//flex 布局比例权值
const styles = StyleSheet.create({

  container: {
    height:41,
    backgroundColor:'#757370',
    flexDirection:'column',
  },
  base_container: {
    height:40,
    backgroundColor:'#757370',
    flexDirection:'row',
  },

  back_container:{
    width:50,
    justifyContent:'center',
    alignItems:'center'

  },
  back: {
    fontSize:16,
  },
  divide: {
    height:1,
    backgroundColor:'#000000',

  },
  titl_container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginLeft: -30,
  },

  title : {
    fontSize:20,
  },
});
