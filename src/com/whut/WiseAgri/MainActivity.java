package com.whut.WiseAgri;

import android.os.Bundle;
import android.view.WindowManager;

import org.apache.cordova.*;

public class MainActivity extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
		super.setIntegerProperty("splashscreen", R.drawable.splashscreen);
		super.loadUrl("file:///android_asset/www/index.html", 30000);
    }
}