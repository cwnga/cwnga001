package wyf.ytl;
import android.app.Activity;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.BaseAdapter;
import android.widget.Gallery;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.AdapterView.OnItemSelectedListener;
public class Sample_5_4 extends Activity {
	//所有資源圖片(andy, bill,edgar,torvalds,turing)id的陣列
	int[] drawableIds=
	{R.drawable.andy,R.drawable.bill,R.drawable.edgar,R.drawable.torvalds,R.drawable.turing};
	//所有資源字串(andy,bill,edgar,torvalds,turing)id的陣列
	int[] msgIds={R.string.andy,R.string.bill,R.string.edgar,R.string.torvalds,R.string.turing};
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        ListView lv=(ListView)this.findViewById(R.id.ListView01);//初始化ListView
        BaseAdapter ba=new BaseAdapter(){//為ListView準備內容適配器
			public int getCount() {return 5;}//總共5個選項
			public Object getItem(int arg0) { return null; }
			public long getItemId(int arg0) { return 0; }
			public View getView(int arg0, View arg1, ViewGroup arg2) {
				//動態產生每個下拉項目對應的View，每個下拉項目View由LinearLayout
				//中包含一個ImageView及一個TextView所組成
				LinearLayout ll=new LinearLayout(Sample_5_4.this);//初始化LinearLayout
				ll.setOrientation(LinearLayout.HORIZONTAL);		//設定方向	
				ll.setPadding(5,5,5,5);//設定四周留白
				ImageView  ii=new ImageView(Sample_5_4.this);//初始化ImageView
				ii.setImageDrawable(getResources().getDrawable(drawableIds[arg0]));//設定圖片
				ii.setScaleType(ImageView.ScaleType.FIT_XY);
				ii.setLayoutParams(new Gallery.LayoutParams(100,98));
				ll.addView(ii);//添加到LinearLayout中
				TextView tv=new TextView(Sample_5_4.this);//初始化TextView
				tv.setText(getResources().getText(msgIds[arg0]));//設定內容
				tv.setTextSize(24);//設定字體大小
				tv.setTextColor(Sample_5_4.this.getResources().getColor(R.color.white));//設定字體顏色
				tv.setPadding(5,5,5,5);//設定四周留白
			    tv.setGravity(Gravity.LEFT);
				ll.addView(tv);//添加到LinearLayout中				
				return ll;
			}        	
        };
        lv.setAdapter(ba);//為ListView設定內容適配器
        lv.setOnItemSelectedListener(//設定下拉選項的監聽器
           new OnItemSelectedListener(){
			public void onItemSelected(AdapterView<?> arg0, View arg1,
					int arg2, long arg3) {//重寫項目被選中事件的處理方法
				TextView tv=(TextView)findViewById(R.id.TextView01);//取得主介面TextView
				LinearLayout ll=(LinearLayout)arg1;//取得目前選中項目對應的LinearLayout
				TextView tvn=(TextView)ll.getChildAt(1);//取得其中的TextView 
				StringBuilder sb=new StringBuilder();//用StringBuilder動態產生訊息
				sb.append(getResources().getText(R.string.ys));
				sb.append(":");
				sb.append(tvn.getText());
				String stemp=sb.toString();				
				tv.setText(stemp.split("\\n")[0]);//設定訊息至主介面TextView		
			}
			public void onNothingSelected(AdapterView<?> arg0){}
    	   }
        );   
        lv.setOnItemClickListener(//設定項目被單擊時的監聽器
           new OnItemClickListener(){
			public void onItemClick(AdapterView<?> arg0, View arg1, int arg2,
					long arg3) {//重寫項目被單擊事件的處理方法
				TextView tv=(TextView)findViewById(R.id.TextView01);//取得主介面TextView
				LinearLayout ll=(LinearLayout)arg1;//取得目前選中項目對應的LinearLayout
				TextView tvn=(TextView)ll.getChildAt(1);//取得其中的TextView 
				StringBuilder sb=new StringBuilder();//用StringBuilder動態產生訊息
				sb.append(getResources().getText(R.string.ys));
				sb.append(":");
				sb.append(tvn.getText());
				String stemp=sb.toString();				
				tv.setText(stemp.split("\\n")[0]);//設定訊息至主介面TextView		
			}        	   
           }
        );
    } 
}