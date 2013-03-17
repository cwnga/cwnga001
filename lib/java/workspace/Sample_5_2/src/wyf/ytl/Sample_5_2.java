package wyf.ytl;

import android.app.Activity;
import android.os.Bundle;
import android.widget.ScrollView;
import android.widget.TextView;

public class Sample_5_2 extends Activity {
	ScrollView scrollView;
	String msg = "我是字串，我很長很長！我是字串，我很長很長！";
	String str = "";
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        scrollView = new ScrollView(this);
    	TextView tv = new TextView(this);
    	tv.setTextSize(23);
    	for(int i=0 ;i<10; i++){
    		str = str + msg;
    	}
    	tv.setText(str);
    	scrollView.addView(tv);
        setContentView(scrollView);
    }
}