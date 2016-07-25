'use strict'


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  BackAndroid,
  NativeModules,
  Animated,
  Image,
  ToastAndroid,
  View
} from 'react-native';
var Log = NativeModules.LogNative;
import RnDemo from './react_native/demo/index';

var TAG = "===main scene === ";
export default class MainScene extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnScene:false,
      currentAlpha:0,
      fadeAnim:new Animated.Value(0),
      textAnim:new Animated.Value(1),
    };
  }

  componentDidMount() {
    var navigator = this.props.navigator;
    this.state.isOnScene = true;
    var _this = this;
    BackAndroid.addEventListener('hardwareBackPress', function() {
      Log.v(TAG + " back is on scene " + _this.state.isOnScene);
      if (navigator && navigator.getCurrentRoutes().length > 1) {
            Log.v(TAG + "====getCurrentRoutes()===" + (navigator.getCurrentRoutes().length));
            navigator.pop();
            return true;
          }
          return false;
      });
     this._startAnim();
  }

  _startAnim() {
        // 组合动画
        // Animated.sequence([            // 首先执行decay动画，结束后同时执行spring和twirl动画
        //   Animated.decay(this.state.positionAnim, {   // 滑行一段距离后停止
        //     velocity: {x: 5, y: 6}, // 根据用户的手势设置速度
        //     deceleration: 0.997,
        //   }),
        //   Animated.parallel([          // 在decay之后并行执行：
        //     Animated.spring(this.state.positionAnim, {
        //       toValue: {x: 0, y: 0}    // 返回到起始点开始
        //     }),
        //     Animated.timing(this.state.scaleAnim, {   // 同时开始旋转
        //       toValue: 360,
        //     }),
        //   ]),
        // ]).start();                    // 执行这一整套动画序列
    if (this.state.currentAlpha == 1) {
      this.state.currentAlpha = 0;
      this.state.fadeAnim.setValue(0);
    }
    Animated.timing(
      this.state.fadeAnim,
      {toValue:1, delay:150, duration:2500},
    ).start(
      (result) => {
        console.log("anim finished " + JSON.stringify(result));
        console.log("anim finished " + result.finished);
        // this._startTextAnim();
        this.state.currentAlpha = 1;
      //  this._pressButtoon();
      });
   }

 //
   _startTextAnim() {
     Animated.timing(
       this.state.textAnim,
       {toValue:1, delay:50, duration:2000},
     ).start(
       (result) => {
         console.log("anim finished " + JSON.stringify(result));
         console.log("anim finished " + result.finished);
       });
    }

  render() {
    return (
      <Image style = {styles.container} source={require('./images/universe.png')}>
      <Animated.Image source={{uri: 'header_logo'}} style={{
        width: 66, height: 58,
        opacity:this.state.fadeAnim,
        transform: [
          {
            translateY:this.state.fadeAnim.interpolate(
              //线性插值，0对应60，1对应0
              {inputRange: [0, 1],outputRange: [60, 0]}
            ),
          },
          {
            scale:this.state.fadeAnim
          },
       ],

      }} />

      <TouchableOpacity
       style={styles.button}
       onPress={this._pressButtoon.bind(this)}>
       <Animated.Text
            style={{
              fontSize:20,color:'#ffffff',
              opacity:this.state.textAnim,
              transform: [
                {
                  translateY:this.state.textAnim.interpolate(
                    //线性插值，0对应60，1对应0
                    {inputRange: [0, 1],outputRange: [60, 0]}
                  ),
                },
                {
                  scale:this.state.textAnim
                },
             ]
            }}
       >
          ReactNative World
       </Animated.Text>
       </TouchableOpacity>
      </Image>
    );
  }

  _pressButtoon() {
    const nav = this.props.navigator;
    if(nav) {
      this.state.isOnScene = false;
      Log.v(TAG + " is onscene " + this.state.isOnScene);
      nav.push(
        {
          component:RnDemo,
          params:{
            title:'React World',
            callback:function(data) {
              ToastAndroid.show('back data' + JSON.stringify(data),
              ToastAndroid.LONG);
            }
          }
        });
      // nav.push(
      //   {
      //     component:PageScrollView,
      //     params:{
      //       title:'React World',
      //       text:'hello'
      //     }
      //   });

    }
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
