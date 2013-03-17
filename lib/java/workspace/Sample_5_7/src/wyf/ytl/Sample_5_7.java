package wyf.ytl;
import android.app.TabActivity;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.widget.TabHost;
public class Sample_5_7 extends TabActivity {
	private TabHost myTabhost;
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        myTabhost=this.getTabHost();//從TabActivity上面抓取放置Tab的TabHost
        LayoutInflater.from(this).inflate(R.layout.main, myTabhost.getTabContentView(), true);
        myTabhost.addTab(
        		myTabhost.newTabSpec("選項卡1")
        		.setIndicator("選項卡1", getResources().getDrawable(R.drawable.png1))
        		.setContent(R.id.linearLayout01)
        		); 
        myTabhost.addTab(
        		myTabhost.newTabSpec("選項卡2")
        		.setIndicator("選項卡2", getResources().getDrawable(R.drawable.png2))
        		.setContent(R.id.linearLayout02)
        		);
        myTabhost.addTab(
        		myTabhost.newTabSpec("選項卡3")
        		.setIndicator("選項卡3", getResources().getDrawable(R.drawable.png3))
        		.setContent(R.id.linearLayout03)
        		);        
    }
}