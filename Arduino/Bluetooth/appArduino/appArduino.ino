#include <SoftwareSerial.h>
SoftwareSerial BTSerial(10, 11);

#define led 8
byte input = 0;

void setup()
{
  Serial.begin(9600);
  BTSerial.begin(9600);
  pinMode(led, OUTPUT);
}

void loop()
{
  while (BTSerial.available() > 0)
  {
    input = BTSerial.read();
  }

  ledBright(input);

}

void ledBright(int brightness)
{
  analogWrite(led, brightness);
}






