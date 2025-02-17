#include <ESP8266WiFi.h> 


#define TRIG_PIN   D1 // The ESP8266 pin D1 connected to Ultrasonic Sensor's TRIG pin
#define ECHO_PIN   D2 // The ESP8266 pin D2 connected to Ultrasonic Sensor's ECHO pin
#define BUZZER_PIN D7 // The ESP8266 pin D7 connected to Piezo Buzzer's pin
#define DISTANCE_THRESHOLD 50 // centimeters
float duration_us, distance_cm;
float duration, distance;

const char* ssid = "Vansa"; //wifi ssid / wifi name
const char* password = "mewmewmew"; //wifi password
int ledPin = LED_BUILTIN; // GPIO13 
WiFiServer server(80); 
void setup() { 
 Serial.begin(115200); 
 pinMode(TRIG_PIN, OUTPUT);   // Configure the ESP8266 pin to the output mode
  pinMode(ECHO_PIN, INPUT); 
 delay(10); 
 pinMode(ledPin, OUTPUT); 
 digitalWrite(ledPin, LOW); 
 // Connect to WiFi network 
 Serial.println(); 
 Serial.println(); 
 Serial.print("Connecting to "); 
 Serial.println(ssid); 
 WiFi.begin(ssid, password); 
 while (WiFi.status() != WL_CONNECTED) { 
   delay(500); 
   Serial.print("."); 
 } 
 Serial.println(""); 
 Serial.println("WiFi connected"); 
 // Start the server 
 server.begin(); 
 Serial.println("Server started"); 
 // Print the IP address 
 Serial.print("Use this URL to connect: "); 
 Serial.print("http://"); 
 Serial.print(WiFi.localIP()); 
 Serial.println("/"); 
} 

void loop() { 
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  duration = pulseIn(ECHO_PIN, HIGH);
  distance = (duration*.0343)/2;
  Serial.print("Distance: ");
  Serial.println(distance);
  delay(100);



 // Check if a client has connected 
 WiFiClient client = server.available(); 
 if (!client) { 
   return; 
 } 
 // Wait until the client sends some data 
 Serial.println("new client"); 
 if(!client.available()){ 
   delay(1); 
 } else{

 // Read the first line of the request 
 String request = client.readStringUntil('\r'); 
 Serial.println(request); 
 client.flush(); 
 // Match the request 
 int value = LOW; 
 if (request.indexOf("/LED=ON") != -1)  { 
   digitalWrite(ledPin, HIGH); 
   value = HIGH; 
 } 
 
// Set ledPin according to the request 
//digitalWrite(ledPin, value); 
 // Return the response 
 client.println("HTTP/1.1 200 OK"); 
 client.println("Content-Type: text/html"); 
 client.println(""); //  do not forget this one 
 client.println(distance); 

 delay(100); 
 Serial.println("Client disonnected"); 
 Serial.println(""); 
 }
} 