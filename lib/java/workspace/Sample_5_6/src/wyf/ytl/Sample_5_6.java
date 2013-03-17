package wyf.ytl;
import android.app.Activity;
import android.os.Bundle;
import android.widget.ProgressBar;
import android.widget.RatingBar;

public class Sample_5_6 extends Activity {
    final static double MAX=100;//ProgressBar程
    final static double MAX_STAR=5;//RatingBar程琍琍计
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        //琍╈┰兵砆┰笆矪瞶祘Α
        RatingBar rb=(RatingBar)findViewById(R.id.RatingBar01);
        rb.setOnRatingBarChangeListener(
        		new RatingBar.OnRatingBarChangeListener(){					
					//@Override
					public void onRatingChanged(RatingBar ratingBar, float rating,
							boolean fromUser) {
						ProgressBar pb=(ProgressBar)findViewById(R.id.ProgressBar01);	
						RatingBar rb=(RatingBar)findViewById(R.id.RatingBar01);
						float rate=rb.getRating();
						pb.setProgress((int) (rate/MAX_STAR*MAX));//盢0-5琍琍计ч衡Θ0-100秈
					}
				}
        );        
    }
}