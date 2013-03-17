package wyf.ytl;
import android.app.Activity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.AutoCompleteTextView;
public class Sample_5_1 extends Activity {
	private static final String[] myStr = new String[]{//常數陣列
		"aaa", "bbb", "ccc", "aab", "aac", "aad"
	};
    public void onCreate(Bundle savedInstanceState) {//重寫的onCreate方法
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);//設定目前顯示的用戶介面
        ArrayAdapter<String> aa = new ArrayAdapter<String> (//建立適配器
        		this, //Context
        		android.R.layout.simple_dropdown_item_1line,//佈局 
        		myStr);//資源陣列
        AutoCompleteTextView myAutoCompleteTextView = //取得控制項的參照
        	(AutoCompleteTextView) findViewById(R.id.myAutoCompleteTextView);
        myAutoCompleteTextView.setAdapter(aa);//設定適配器
        myAutoCompleteTextView.setThreshold(1);//定義用戶需要輸入的字數
    }
}