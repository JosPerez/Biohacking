//this is slave

#include <SoftwareSerial.h>

SoftwareSerial BTSerial(10, 11);

int state = 0;
const int led = 8;
const int button = 2;
int buttonstate = 1;

void setup() 
{
  BTSerial.begin(9600);
  Serial.begin(9600);
  pinMode(led, OUTPUT);
  digitalWrite(led, LOW);
  pinMode(button, INPUT);
}
void loop() 
{
 if(BTSerial.available() > 0)
 { 
    // Checks whether data is comming from the serial port
    state = BTSerial.read(); // Reads the data from the serial port
    Serial.write(state);
    Serial.println();
 };

  // Reading the button
 buttonstate = digitalRead(button);
 if (buttonstate == HIGH) 
 {
   BTSerial.write("Hello\r\n"); // Sends '1' to the master to turn on LED
   //Serial.println("test");
   delay(1000);
 }
 
  if (state == '1') 
 {
  digitalWrite(led, HIGH); // LED ON
 }
 else if (state == '0') 
 {
  digitalWrite(led, LOW); // LED OFF
 }
}
