package wyf.ytl;
import android.app.Activity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.AutoCompleteTextView;
public class Sample_5_1 extends Activity {
	private static final String[] myStr = new String[]{//�`�ư}�C
		"aaa", "bbb", "ccc", "aab", "aac", "aad"
	};
    public void onCreate(Bundle savedInstanceState) {//���g��onCreate��k
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);//�]�w�ثe��ܪ��Τᤶ��
        ArrayAdapter<String> aa = new ArrayAdapter<String> (//�إ߾A�t��
        		this, //Context
        		android.R.layout.simple_dropdown_item_1line,//�G�� 
        		myStr);//�귽�}�C
        AutoCompleteTextView myAutoCompleteTextView = //���o������ѷ�
        	(AutoCompleteTextView) findViewById(R.id.myAutoCompleteTextView);
        myAutoCompleteTextView.setAdapter(aa);//�]�w�A�t��
        myAutoCompleteTextView.setThreshold(1);//�w�q�Τ�ݭn��J���r��
    }
}