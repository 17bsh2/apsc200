/*  DHT11/ DHT22 Sensor Temperature and Humidity Tutorial
 *  Program made by Dejan Nedelkovski,
 *  www.HowToMechatronics.com 
 */
/*
 * You can find the DHT Library from Arduino official website
 * https://playground.arduino.cc/Main/DHTLib
 */
 
#include <dht.h>
#define dataPin 8 // Defines pin number to which the sensor is connected
dht DHT; // Creats a DHT object
void setup() {
  Serial.begin(9600);
}
void loop() {
  int readData = DHT.read22(dataPin); // Reads the data from the sensor
  float t = DHT.temperature; // Gets the values of the temperature
  float h = DHT.humidity; // Gets the values of the humidity
  float f = (t*9/5)+32;
  float HeatIndex = -42.379 +(2.04901523*f)+(10.14333127*h) - (0.22475541*f*h) - (6.83783*0.001*h*h)-(5.481717*0.01*h*h)+(1.22874*0.001*f*f*h)+(8.5282*0.0001*f*h*h)-(1.99*0.000001*f*f*h*h);
  // Printing the results on the serial monitor
  Serial.print("Temperature = ");
  Serial.print(t);
  Serial.print(" *C ");
  Serial.print("    Humidity = ");
  Serial.print(h);
  Serial.println(" % ");
  Serial.print("    Body interprets temperature as = ");
  Serial.print(HeatIndex);
  Serial.println(" % ");
  
  delay(2000); // Delays 2 secods, as the DHT22 sampling rate is 0.5Hz
}
