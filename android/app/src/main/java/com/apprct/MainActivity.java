package com.apprct;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
// import com.facebook.react.bridge.JSIModulePackage; // <- add this
// import com.swmansion.reanimated.ReanimatedJSIModulePackage; // <- add this
// import Android.os.Bundle;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "appRct";
  }
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
//   private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

//       @Override
//       protected String getJSMainModuleName() {
//         return "index";
//       }
// // add more this "Override" below <----------------
//       @Override 
//       protected JSIModulePackage getJSIModulePackage() {
//         return new ReanimatedJSIModulePackage(); // <- add
//       }
//     };

  // @Override
  // protected void onCreate(Bundle savedInstanceState) {
  //    super.onCreate(null);
  // }
  
}
