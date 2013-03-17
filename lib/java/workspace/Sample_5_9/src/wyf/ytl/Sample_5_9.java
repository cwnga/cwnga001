package wyf.ytl;
import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.AdapterView.OnItemSelectedListener;
public class Sample_5_9 extends Activity {
	final static int WRAP_CONTENT=-2;//表示WRAP_CONTENT的常數
	//所有資源圖片(足球、藍球、排球)id的陣列
	int[] drawableIds={R.drawable.football,R.drawable.basketball,R.drawable.volleyball};
	//所有資源字串(足球、藍球、排球)id的陣列
	int[] msgIds={R.string.zq,R.string.lq,R.string.pq};
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        Spinner sp=(Spinner)this.findViewById(R.id.Spinner01);//初始化Spinner
        BaseAdapter ba=new BaseAdapter(){//為Spinner準備內容適配器
			//@Override
			public int getCount() {return 3;}//總共三個選項
			//@Override
			public Object getItem(int arg0) { return null; }
			//@Override
			public long getItemId(int arg0) { return 0; }
			//@Override
			public View getView(int arg0, View arg1, ViewGroup arg2) {
				//動態產生每個下拉項目對的View，每個下拉項目View由LinearLayout
				//中包含一個ImageView和一個TextView所組成
				//初始化LinearLayout
				LinearLayout ll=new LinearLayout(Sample_5_9.this);
				ll.setOrientation(LinearLayout.HORIZONTAL);		//設定方向	
				//初始化ImageView
				ImageView  ii=new ImageView(Sample_5_9.this);
				ii.setImageDrawable(getResources().getDrawable(drawableIds[arg0]));//設定圖片
				ll.addView(ii);//添加到LinearLayout中
				//初始化TextView
				TextView tv=new TextView(Sample_5_9.this);
				tv.setText(" "+getResources().getText(msgIds[arg0]));//設定內容
				tv.setTextSize(24);//設定字體大小
				tv.setTextColor(R.color.black);//設定字體顏色
				ll.addView(tv);//添加到LinearLayout中
				return ll;
			}        	
        };
        sp.setAdapter(ba);//為Spinner設定內容適配器
        sp.setOnItemSelectedListener(//設定項目選中的監聽器
           new OnItemSelectedListener(){
			//@Override
			public void onItemSelected(AdapterView<?> arg0, View arg1,
					int arg2, long arg3) {//重寫項目被選中事件的處理方法
				TextView tv=(TextView)findViewById(R.id.TextView01);//取得主介面TextView
				LinearLayout ll=(LinearLayout)arg1;//取得目前選中項目對應的LinearLayout
				TextView tvn=(TextView)ll.getChildAt(1);//抓取其中的TextView 
				StringBuilder sb=new StringBuilder();//用StringBuilder動態產生訊息
				sb.append(getResources().getText(R.string.ys));
				sb.append(":");
				sb.append(tvn.getText());
				tv.setText(sb.toString());//設定訊息至主介面TextView
			}
			//@Override
			public void onNothingSelected(AdapterView<?> arg0) { }        	   
           }
        );
    }
}