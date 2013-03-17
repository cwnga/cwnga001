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
	//�Ҧ��귽�Ϥ�(andy, bill,edgar,torvalds,turing)id���}�C
	int[] drawableIds=
	{R.drawable.andy,R.drawable.bill,R.drawable.edgar,R.drawable.torvalds,R.drawable.turing};
	//�Ҧ��귽�r��(andy,bill,edgar,torvalds,turing)id���}�C
	int[] msgIds={R.string.andy,R.string.bill,R.string.edgar,R.string.torvalds,R.string.turing};
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        ListView lv=(ListView)this.findViewById(R.id.ListView01);//��l��ListView
        BaseAdapter ba=new BaseAdapter(){//��ListView�ǳƤ��e�A�t��
			public int getCount() {return 5;}//�`�@5�ӿﶵ
			public Object getItem(int arg0) { return null; }
			public long getItemId(int arg0) { return 0; }
			public View getView(int arg0, View arg1, ViewGroup arg2) {
				//�ʺA���ͨC�ӤU�Զ��ع�����View�A�C�ӤU�Զ���View��LinearLayout
				//���]�t�@��ImageView�Τ@��TextView�Ҳզ�
				LinearLayout ll=new LinearLayout(Sample_5_4.this);//��l��LinearLayout
				ll.setOrientation(LinearLayout.HORIZONTAL);		//�]�w��V	
				ll.setPadding(5,5,5,5);//�]�w�|�P�d��
				ImageView  ii=new ImageView(Sample_5_4.this);//��l��ImageView
				ii.setImageDrawable(getResources().getDrawable(drawableIds[arg0]));//�]�w�Ϥ�
				ii.setScaleType(ImageView.ScaleType.FIT_XY);
				ii.setLayoutParams(new Gallery.LayoutParams(100,98));
				ll.addView(ii);//�K�[��LinearLayout��
				TextView tv=new TextView(Sample_5_4.this);//��l��TextView
				tv.setText(getResources().getText(msgIds[arg0]));//�]�w���e
				tv.setTextSize(24);//�]�w�r��j�p
				tv.setTextColor(Sample_5_4.this.getResources().getColor(R.color.white));//�]�w�r���C��
				tv.setPadding(5,5,5,5);//�]�w�|�P�d��
			    tv.setGravity(Gravity.LEFT);
				ll.addView(tv);//�K�[��LinearLayout��				
				return ll;
			}        	
        };
        lv.setAdapter(ba);//��ListView�]�w���e�A�t��
        lv.setOnItemSelectedListener(//�]�w�U�Կﶵ����ť��
           new OnItemSelectedListener(){
			public void onItemSelected(AdapterView<?> arg0, View arg1,
					int arg2, long arg3) {//���g���سQ�襤�ƥ󪺳B�z��k
				TextView tv=(TextView)findViewById(R.id.TextView01);//���o�D����TextView
				LinearLayout ll=(LinearLayout)arg1;//���o�ثe�襤���ع�����LinearLayout
				TextView tvn=(TextView)ll.getChildAt(1);//���o�䤤��TextView 
				StringBuilder sb=new StringBuilder();//��StringBuilder�ʺA���ͰT��
				sb.append(getResources().getText(R.string.ys));
				sb.append(":");
				sb.append(tvn.getText());
				String stemp=sb.toString();				
				tv.setText(stemp.split("\\n")[0]);//�]�w�T���ܥD����TextView		
			}
			public void onNothingSelected(AdapterView<?> arg0){}
    	   }
        );   
        lv.setOnItemClickListener(//�]�w���سQ�����ɪ���ť��
           new OnItemClickListener(){
			public void onItemClick(AdapterView<?> arg0, View arg1, int arg2,
					long arg3) {//���g���سQ�����ƥ󪺳B�z��k
				TextView tv=(TextView)findViewById(R.id.TextView01);//���o�D����TextView
				LinearLayout ll=(LinearLayout)arg1;//���o�ثe�襤���ع�����LinearLayout
				TextView tvn=(TextView)ll.getChildAt(1);//���o�䤤��TextView 
				StringBuilder sb=new StringBuilder();//��StringBuilder�ʺA���ͰT��
				sb.append(getResources().getText(R.string.ys));
				sb.append(":");
				sb.append(tvn.getText());
				String stemp=sb.toString();				
				tv.setText(stemp.split("\\n")[0]);//�]�w�T���ܥD����TextView		
			}        	   
           }
        );
    } 
}