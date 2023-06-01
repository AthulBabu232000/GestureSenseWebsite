//FirebaseESP8266.h must be included before ESP8266WiFi.h
#include "FirebaseESP8266.h"  // Install Firebase ESP8266 library
#include <ESP8266WiFi.h>
//#define FIREBASE_HOST "nodemcuchecking-default-rtdb.firebaseio.com"      
//#define FIREBASE_AUTH "tw2vvsYd8KvwRtGq2wpaNBkzldbfsv0V1jz7rd6N"
#define FIREBASE_HOST "gesturesense-4c7d8-default-rtdb.firebaseio.com"      
#define FIREBASE_AUTH "sR19TRsaISmwPvnbR6pMxoAhyEBWmLL7sQ1Dh0N2"
#define WIFI_SSID "me"
#define WIFI_PASSWORD "123456789"

//Define FirebaseESP8266 data object
FirebaseData firebaseData;
FirebaseData CutData;
FirebaseJson json;
float gId=2;
String gName="";



void setup()
{

  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

  


  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
Firebase.reconnectWiFi(true);
  Serial.println();

  Serial.print("Connected with IP: ");
  
  Serial.print(WiFi.localIP());

  

}

void loop() {


       Firebase.setFloat(firebaseData, "gestureSense/gestureId",gId);
    Firebase.setString(firebaseData, "gestureSense/gestureName", gName.c_str());

   
}