package com.example.speech;

import java.util.ArrayList;

 
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.speech.RecognizerIntent;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
 
public class AndroidSpeechRecognition extends Activity {
  
 private static final int RQS_VOICE_RECOGNITION = 1;
 TextView textResult;
  
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        Button buttonSpeech = (Button)findViewById(R.id.Speech);
        textResult = (TextView)findViewById(R.id.Result);
         
        buttonSpeech.setOnClickListener(new Button.OnClickListener(){
 
   @Override
   public void onClick(View arg0) {
    // TODO Auto-generated method stub
    Intent intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
       intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL,
           RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
       intent.putExtra(RecognizerIntent.EXTRA_PROMPT,
           "Start Speech");
       startActivityForResult(intent, RQS_VOICE_RECOGNITION);
   }});
    }
 
 @Override
 protected void onActivityResult(int requestCode, int resultCode, Intent data) {
  // TODO Auto-generated method stub
  if(requestCode == RQS_VOICE_RECOGNITION){
   if(resultCode == RESULT_OK){
 
    ArrayList<String> result = data.getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS);
    String firstMatch = (String)result.get(0);
    textResult.setText(firstMatch);
   }
  }
   
 
 }
}