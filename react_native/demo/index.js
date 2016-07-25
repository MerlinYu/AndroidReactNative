
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Animated,
  ListView,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  DrawerLayoutAndroid,
  ProgressBarAndroid,
  Navigator,
  NativeModules,
  BackAndroid,
  View
} from 'react-native';
import PageListView from './PageListView';
import PageScrollView from './PageScrollView';

import PageAnim from './PageAnim';
import PageTab from './CommonComponents/components/PageTab';
import PageSimpleTab from './PageSimpleTab';
var PageTabIndex = require("./CommonComponents/components/PageTabIndex");
var ToolbarAndroid = require('ToolbarAndroid');

import ReactComponentDemo from './ReactComponentDemo';
import RoundBtn from './round_btn';
import TitleBar from './TitleBar';

var Log = NativeModules.LogNative;

var TAG = "===demo index===";

export default class ComponentView extends Component {
  static propTypes = {
    title:React.PropTypes.string.isRequired,
    navigator:React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      isOnScene:false,
    };
  }


  componentDidMount() {
    const navigator = this.props.navigator;
    this.state.isOnScene = true;
    var _this = this;
    BackAndroid.addEventListener('hardwareBackPress', function() {
    Log.v(TAG + " back is on scene " + _this.state.isOnScene );

    if (navigator &&_this.isOnScene&& navigator.getCurrentRoutes().length > 1) {
      Log.v(TAG + "CurrentRoutes==" + navigator.getCurrentRoutes().length);
      navigator.pop();
      return true;
    }
    return false;
    });
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress');
  }
  //navigationBar node
  //可选参数，提供一个在场景切换的时候保持的导航栏。
  _pressButtoon(ComponentView){
    const navigator = this.props.navigator;
    if (navigator && ComponentView) {
      this.state.isOnScene = false;
      Log.v("==_pressButtoon==");
            navigator.push({
                index_id:'page_list_view',
                component:ComponentView,
            })
        }
    }
    _pressBack() {
      const navigator = this.props.navigator;
      // 回调函数，传递数据
      if (this.props.callback) {
        this.props.callback("back to up navigator");
      }
      if (navigator) {
        navigator.pop();
      }
    }

  render() {
    return(
      <View>
      <TitleBar back={true} title={this.props.title} onBack={this._pressBack.bind(this)}>
      </TitleBar>
        <View style = {styles.content_container}>
             <TouchableOpacity
              onPress={this._pressButtoon.bind(this,ReactComponentDemo)}
              >
              <Text style = {styles.textCenter}> React Native Component!</Text>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={this._pressButtoon.bind(this,PageListView)}
              >
               <Text style = {styles.textCenter}> ListView </Text>
               </TouchableOpacity>

              <TouchableOpacity
              onPress={this._pressButtoon.bind(this,PageScrollView)}
              >
              <Text style = {styles.textCenter}> ScrollView </Text>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={this._pressButtoon.bind(this,PageSimpleTab)}
               >
               <Text style = {styles.textCenter}> TabPage </Text>
              </TouchableOpacity>
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection:'column',
    backgroundColor: '#fffff0',
  },
  nav_container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  content_container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    height:600,
    backgroundColor: '#ffffff',
  },

  nav_bar_container: {
    backgroundColor: '#feecdd',
  },
  nav_bar_text: {
    fontSize:20,
    margin:5
  },
  button: {
    marginTop:20,
  },
  textCenter:{
    textAlign:'center',
    fontSize:16,
    margin:10
  }
});
