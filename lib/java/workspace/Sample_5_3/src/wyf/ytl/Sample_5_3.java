package wyf.ytl;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.GridView;
import android.widget.LinearLayout;
import android.widget.SimpleAdapter;
import android.widget.TextView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.AdapterView.OnItemSelectedListener;
public class Sample_5_3 extends Activity {
	//所有資源圖片(andy, bill,edgar,torvalds,turing)id的陣列
	int[] drawableIds=
		{R.drawable.andy,R.drawable.bill,R.drawable.edgar,R.drawable.torvalds,R.drawable.turing};
	//所有資源字串(andy,bill,edgar,torvalds,turing)id的陣列
	int[] nameIds=
		{R.string.andy,R.string.bill,R.string.edgar,R.string.torvalds,R.string.turing};
	int[] msgIds=
		{R.string.andydis,R.string.billdis,R.string.edgardis,
			R.string.torvaldsdis,R.string.turingdis};
    public List<? extends Map<String, ?>> generateDataList(){
    	ArrayList<Map<String,Object>> list=new ArrayList<Map<String,Object>>();;
    	int rowCounter=drawableIds.length;//取得表格的列數
    	for(int i=0;i<rowCounter;i++){//循環產生每列包含對應各個欄位資料的Map;col1,col2,col3為欄位名
    		HashMap<String,Object> hmap=new HashMap<String,Object>();
    		hmap.put("col1", drawableIds[i]);   //第一欄為圖片		
    		hmap.put("col2", this.getResources().getString(nameIds[i]));//第二欄為姓名
    		hmap.put("col3", this.getResources().getString(msgIds[i]));//第三欄為描述
    		list.add(hmap);
    	}    	
    	return list;
	}
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        GridView gv=(GridView)this.findViewById(R.id.GridView01);        
        SimpleAdapter sca=new SimpleAdapter(
        	this,
        	generateDataList(), //資料List
        	R.layout.grid_row, //列對應layout id
        	new String[]{"col1","col2","col3"}, //欄名列表
        	new int[]{R.id.ImageView01,R.id.TextView02,R.id.TextView03}//欄對應控制項id列表
        );
        gv.setAdapter(sca);//為GridView設定資料適配器
        gv.setOnItemSelectedListener(//設定項目選中的監聽器
           new OnItemSelectedListener(){
        	   public void onItemSelected(AdapterView<?> arg0, View arg1,
					int arg2, long arg3) {//重寫項目被選中事件的處理方法
        		   TextView tv=(TextView)findViewById(R.id.TextView01);//抓取主介面TextView
        		   LinearLayout ll=(LinearLayout)arg1;//抓取目前選中項目對應的LinearLayout
        		   TextView tvn=(TextView)ll.getChildAt(1);//抓取其中的TextView 
        		   TextView tvnL=(TextView)ll.getChildAt(2);//抓取其中的TextView 
        		   StringBuilder sb=new StringBuilder();
        		   sb.append(tvn.getText());//抓取姓名資訊
        		   sb.append(" ");
        		   sb.append(tvnL.getText());//抓取描述資訊			
        		   tv.setText(sb.toString());//設定訊息至主介面TextView		
        	   }
        	   public void onNothingSelected(AdapterView<?> arg0){}
           	}
        );  
        gv.setOnItemClickListener( //設定項目被點擊的監聽器
        	new OnItemClickListener(){
        	   public void onItemClick(AdapterView<?> arg0, View arg1, int arg2,
					long arg3) {//重寫項目被單擊事件的處理方法
        		   TextView tv=(TextView)findViewById(R.id.TextView01);//抓取主介面TextView
        		   LinearLayout ll=(LinearLayout)arg1;//抓取目前選中項目對應的LinearLayout
        		   TextView tvn=(TextView)ll.getChildAt(1);//抓取其中的TextView 
        		   TextView tvnL=(TextView)ll.getChildAt(2);//抓取其中的TextView 
        		   StringBuilder sb=new StringBuilder();
        		   sb.append(tvn.getText());//抓取姓名資訊
        		   sb.append(" ");
        		   sb.append(tvnL.getText());//抓取描述資訊				
        		   tv.setText(sb.toString());//設定訊息至主介面TextView	
        	   }        	   
           	}
        );        
    }
}