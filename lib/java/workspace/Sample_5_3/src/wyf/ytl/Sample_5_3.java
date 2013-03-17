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
	//�Ҧ��귽�Ϥ�(andy, bill,edgar,torvalds,turing)id���}�C
	int[] drawableIds=
		{R.drawable.andy,R.drawable.bill,R.drawable.edgar,R.drawable.torvalds,R.drawable.turing};
	//�Ҧ��귽�r��(andy,bill,edgar,torvalds,turing)id���}�C
	int[] nameIds=
		{R.string.andy,R.string.bill,R.string.edgar,R.string.torvalds,R.string.turing};
	int[] msgIds=
		{R.string.andydis,R.string.billdis,R.string.edgardis,
			R.string.torvaldsdis,R.string.turingdis};
    public List<? extends Map<String, ?>> generateDataList(){
    	ArrayList<Map<String,Object>> list=new ArrayList<Map<String,Object>>();;
    	int rowCounter=drawableIds.length;//���o��檺�C��
    	for(int i=0;i<rowCounter;i++){//�`�����ͨC�C�]�t�����U������ƪ�Map;col1,col2,col3�����W
    		HashMap<String,Object> hmap=new HashMap<String,Object>();
    		hmap.put("col1", drawableIds[i]);   //�Ĥ@�欰�Ϥ�		
    		hmap.put("col2", this.getResources().getString(nameIds[i]));//�ĤG�欰�m�W
    		hmap.put("col3", this.getResources().getString(msgIds[i]));//�ĤT�欰�y�z
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
        	generateDataList(), //���List
        	R.layout.grid_row, //�C����layout id
        	new String[]{"col1","col2","col3"}, //��W�C��
        	new int[]{R.id.ImageView01,R.id.TextView02,R.id.TextView03}//��������id�C��
        );
        gv.setAdapter(sca);//��GridView�]�w��ƾA�t��
        gv.setOnItemSelectedListener(//�]�w���ؿ襤����ť��
           new OnItemSelectedListener(){
        	   public void onItemSelected(AdapterView<?> arg0, View arg1,
					int arg2, long arg3) {//���g���سQ�襤�ƥ󪺳B�z��k
        		   TextView tv=(TextView)findViewById(R.id.TextView01);//����D����TextView
        		   LinearLayout ll=(LinearLayout)arg1;//����ثe�襤���ع�����LinearLayout
        		   TextView tvn=(TextView)ll.getChildAt(1);//����䤤��TextView 
        		   TextView tvnL=(TextView)ll.getChildAt(2);//����䤤��TextView 
        		   StringBuilder sb=new StringBuilder();
        		   sb.append(tvn.getText());//����m�W��T
        		   sb.append(" ");
        		   sb.append(tvnL.getText());//����y�z��T			
        		   tv.setText(sb.toString());//�]�w�T���ܥD����TextView		
        	   }
        	   public void onNothingSelected(AdapterView<?> arg0){}
           	}
        );  
        gv.setOnItemClickListener( //�]�w���سQ�I������ť��
        	new OnItemClickListener(){
        	   public void onItemClick(AdapterView<?> arg0, View arg1, int arg2,
					long arg3) {//���g���سQ�����ƥ󪺳B�z��k
        		   TextView tv=(TextView)findViewById(R.id.TextView01);//����D����TextView
        		   LinearLayout ll=(LinearLayout)arg1;//����ثe�襤���ع�����LinearLayout
        		   TextView tvn=(TextView)ll.getChildAt(1);//����䤤��TextView 
        		   TextView tvnL=(TextView)ll.getChildAt(2);//����䤤��TextView 
        		   StringBuilder sb=new StringBuilder();
        		   sb.append(tvn.getText());//����m�W��T
        		   sb.append(" ");
        		   sb.append(tvnL.getText());//����y�z��T				
        		   tv.setText(sb.toString());//�]�w�T���ܥD����TextView	
        	   }        	   
           	}
        );        
    }
}