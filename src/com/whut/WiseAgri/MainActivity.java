package com.whut.WiseAgri;

import java.util.Timer;
import java.util.TimerTask;

import android.os.Bundle;

import org.apache.cordova. * ;

public class MainActivity extends DroidGap {
	
	 @ Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.loadUrl("file:///android_asset/www/index.html");
	}
}
