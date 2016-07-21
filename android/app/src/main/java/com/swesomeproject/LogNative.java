package com.swesomeproject;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by yuchao on 7/19/16.
 */
public class LogNative extends ReactContextBaseJavaModule {
  private String TAG = "LogNative";
  public LogNative(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "LogNative";
  }

  @ReactMethod
  public void v(String log) {
    if (null == log) {
      Log.v(TAG,"log = null");
    } else {
      Log.v(TAG, log);
    }

  }








}
