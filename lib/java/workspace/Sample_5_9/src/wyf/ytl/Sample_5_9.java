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
	final static int WRAP_CONTENT=-2;//���WRAP_CONTENT���`��
	//�Ҧ��귽�Ϥ�(���y�B�Ųy�B�Ʋy)id���}�C
	int[] drawableIds={R.drawable.football,R.drawable.basketball,R.drawable.volleyball};
	//�Ҧ��귽�r��(���y�B�Ųy�B�Ʋy)id���}�C
	int[] msgIds={R.string.zq,R.string.lq,R.string.pq};
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        Spinner sp=(Spinner)this.findViewById(R.id.Spinner01);//��l��Spinner
        BaseAdapter ba=new BaseAdapter(){//��Spinner�ǳƤ��e�A�t��
			//@Override
			public int getCount() {return 3;}//�`�@�T�ӿﶵ
			//@Override
			public Object getItem(int arg0) { return null; }
			//@Override
			public long getItemId(int arg0) { return 0; }
			//@Override
			public View getView(int arg0, View arg1, ViewGroup arg2) {
				//�ʺA���ͨC�ӤU�Զ��ع諸View�A�C�ӤU�Զ���View��LinearLayout
				//���]�t�@��ImageView�M�@��TextView�Ҳզ�
				//��l��LinearLayout
				LinearLayout ll=new LinearLayout(Sample_5_9.this);
				ll.setOrientation(LinearLayout.HORIZONTAL);		//�]�w��V	
				//��l��ImageView
				ImageView  ii=new ImageView(Sample_5_9.this);
				ii.setImageDrawable(getResources().getDrawable(drawableIds[arg0]));//�]�w�Ϥ�
				ll.addView(ii);//�K�[��LinearLayout��
				//��l��TextView
				TextView tv=new TextView(Sample_5_9.this);
				tv.setText(" "+getResources().getText(msgIds[arg0]));//�]�w���e
				tv.setTextSize(24);//�]�w�r��j�p
				tv.setTextColor(R.color.black);//�]�w�r���C��
				ll.addView(tv);//�K�[��LinearLayout��
				return ll;
			}        	
        };
        sp.setAdapter(ba);//��Spinner�]�w���e�A�t��
        sp.setOnItemSelectedListener(//�]�w���ؿ襤����ť��
           new OnItemSelectedListener(){
			//@Override
			public void onItemSelected(AdapterView<?> arg0, View arg1,
					int arg2, long arg3) {//���g���سQ�襤�ƥ󪺳B�z��k
				TextView tv=(TextView)findViewById(R.id.TextView01);//���o�D����TextView
				LinearLayout ll=(LinearLayout)arg1;//���o�ثe�襤���ع�����LinearLayout
				TextView tvn=(TextView)ll.getChildAt(1);//����䤤��TextView 
				StringBuilder sb=new StringBuilder();//��StringBuilder�ʺA���ͰT��
				sb.append(getResources().getText(R.string.ys));
				sb.append(":");
				sb.append(tvn.getText());
				tv.setText(sb.toString());//�]�w�T���ܥD����TextView
			}
			//@Override
			public void onNothingSelected(AdapterView<?> arg0) { }        	   
           }
        );
    }
}