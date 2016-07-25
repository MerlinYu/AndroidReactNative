'use strict'

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  RefreshControl,
  TouchableOpacity,
  View
} from 'react-native';

const TAG = "===scroll view=== ";
var ItemView = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },
  render: function() {
    return (
      <View style={styles.itemView}>
        <Image style={styles.itemImg} source={{uri:this.props.uri}} />
      </View>
    );
  }
});

var THUMBS =
[
'http://img.taopic.com/uploads/allimg/130303/267839-1303030RF727.jpg',
'http://pic.58pic.com/58pic/13/19/56/70p58PICWqk_1024.jpg',
];
var createItemRow = (uri, i) => <ItemView key={i} uri={uri} />;

export default class PageScrollView extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefresh:false,
      rowData:THUMBS,
    };
  }

  componentDidMount() {

  }

  render() {
    var _scrollView: ScrollView;
    return (
      <View >
      <ScrollView
           ref={(scrollView) => { _scrollView = scrollView; }}
           automaticallyAdjustContentInsets={false}
           showsVerticalScrollIndicator={true}
           onScroll={() => { console.log('onScroll!'); }}
           scrollEventThrottle={200}
           style={styles.scrollView}
           refreshControl = {
             <RefreshControl onRefresh={this._onRefresh.bind(this)}
             refreshing = {this.state.isRefresh}
             // android
             progressBackgroundColor = {'gold'}
             // ios
             title={'loading'}/>}
           >
           {this.state.rowData.map(createItemRow)}
         </ScrollView>

         <TouchableOpacity
           style={styles.itemView}
           onPress={() => { _scrollView.scrollTo({y: 0}); }}>
           <Text>Scroll to top</Text>
         </TouchableOpacity>
    </View>);
  }

  _onRefresh() {
    console.log(TAG + this.state.isRefresh);
    console.log(TAG + this.state.rowData);

    if (!this.state.isRefresh) {
      this.setState({isRefresh:true});
      setTimeout(() => {
        const rowData = Array.from(new Array(2))
        .map((val,i) => {
          if(i==0) {
            return 'http://img4.imgtn.bdimg.com/it/u=1014014535,1894341967&fm=21&gp=0.jpg';
          } else if(i==1) {
            return 'http://pic.58pic.com/58pic/13/19/56/70p58PICWqk_1024.jpg';
          }
        }).concat(this.state.rowData);
        console.log(TAG + rowData);

        this.setState({
          isRefresh:false,
          rowData:rowData,
        });
      },5000);

    }
  }
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 300,
  },
  horizontalScrollView: {
    height: 120,
  },
  containerPage: {
    height: 50,
    width: 50,
    backgroundColor: '#527FE4',
    padding: 5,
  },
  text: {
    fontSize: 20,
    color: '#888888',
    left: 80,
    top: 20,
    height: 40,
  },
  itemView: {
    marginTop:5 ,
    marginLeft:5,
    marginRight:5,
    padding: 4,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3,
  },
  buttonContents: {
    flexDirection: 'row',
    width: 64,
    height: 64,
  },
  itemImg: {
    width: 64,
    height: 64,
  }
});
