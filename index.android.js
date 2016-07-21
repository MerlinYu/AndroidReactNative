/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 'use strict';

 import React from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   Navigator,
   BackAndroid,
   NativeModules,
   TouchableOpacity
 } from 'react-native';
 import RnDemo from './react_native/demo/index'
 import MainScene from './main_scene';
 var Log = NativeModules.LogNative;
 var routes = [
    {title: 'Main Scene', index_id: "main_scene", component: MainScene}
];
var TAG = "===index.android=== ";

 class SwesomeProject extends React.Component {

     constructor(props) {
       super(props);
       this.state = {
         isOnScene:false,
       };
     }

   componentDidMount() {
     var navigator = this.props.navigator;
     var isOnScene = this.state.isOnScene;
     //
    //  BackAndroid.addEventListener('hardwareBackPress', function() {
    //   Log.v(TAG + " back is on scene " + isOnScene );
    //   if (navigator && navigator.getCurrentRoutes().length > 1) {
    //       Log.v(TAG + "CurrentRoutes==" + navigator.getCurrentRoutes().length)
    //        return true;
    //      }
    //      return false;
    //    });
   }
   render() {
     return (
        <View style={styles.container}>
         <Navigator
           initialRoute={routes[0]}
           configureScene={(route, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJump}
           renderScene={this.renderScene} />
        </View>
     )
   }


   renderScene(route,nav) {
     let Component = route.component;
     if(route.component) {
     return <Component {...route.params} navigator={nav} />
     }
   }
 }

 var styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
   },
   nav_container: {
     flex: 1,
     flexDirection:'column',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#ffffff',
   },
   textCenter:{
     textAlign:'center',
     fontSize:20,
     margin:10
   }
 });

AppRegistry.registerComponent('SwesomeProject', () => SwesomeProject);
