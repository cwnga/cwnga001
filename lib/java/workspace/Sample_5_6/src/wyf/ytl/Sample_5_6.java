package wyf.ytl;
import android.app.Activity;
import android.os.Bundle;
import android.widget.ProgressBar;
import android.widget.RatingBar;

public class Sample_5_6 extends Activity {
    final static double MAX=100;//ProgressBar的最大值
    final static double MAX_STAR=5;//RatingBar的最大星星數
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        //星形拖拉條被拉動的處理程式
        RatingBar rb=(RatingBar)findViewById(R.id.RatingBar01);
        rb.setOnRatingBarChangeListener(
        		new RatingBar.OnRatingBarChangeListener(){					
					//@Override
					public void onRatingChanged(RatingBar ratingBar, float rating,
							boolean fromUser) {
						ProgressBar pb=(ProgressBar)findViewById(R.id.ProgressBar01);	
						RatingBar rb=(RatingBar)findViewById(R.id.RatingBar01);
						float rate=rb.getRating();
						pb.setProgress((int) (rate/MAX_STAR*MAX));//將0-5星星數折算成0-100的進度值
					}
				}
        );        
    }
}