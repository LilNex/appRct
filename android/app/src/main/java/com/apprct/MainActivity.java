package com.apprct;

import com.facebook.react.ReactActivity;
import Android.os.Bundle;

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
}
