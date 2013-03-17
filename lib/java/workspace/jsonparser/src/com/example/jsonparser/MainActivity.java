package com.example.jsonparser;



import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
 
import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
 
public class MainActivity extends Activity {
    private String JSONString;
 
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
 
        try {
            JSONEncode();
            JSONDecode();
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }
 
    private void JSONEncode() throws JSONException {
        JSONArray jsonArray = new JSONArray();
 
        for (int i = 0; i < name.length; i++) {
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("name", name[i]);
            jsonObject.put("id", id[i]);
            jsonObject.put("score", score[i]);
            jsonArray.put(jsonObject);
        }
 
        Log.i("JSON String", jsonArray.toString());
        JSONString = jsonArray.toString();
    }
 
    private void JSONDecode() throws JSONException {
        JSONArray jsonArray = new JSONArray(JSONString);
        Log.i("Number of Entries", Integer.toString(jsonArray.length()));
 
        for (int i = 0; i < jsonArray.length(); i++) {
            JSONObject jsonObject = jsonArray.getJSONObject(i);
            String name = jsonObject.getString("name");
            int id = jsonObject.getInt("id");
            double score = jsonObject.getDouble("score");
            Log.i("Entry", "name: " + name + ", id: " + id + ", score: " + score);
        }
    }
 
    private static final String[] name = { "Android", "Ben", "Chris", "David", "Eric", "Frankie",
            "Gary", "Henry", "Ivan", "Joe" };
    private static final int[] id = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
    private static final double[] score = { 4.8, 3.2, 2.1, 4.3, 2.0, 0.9, 1.4, 2.8, 3.4, 0.1 };
}