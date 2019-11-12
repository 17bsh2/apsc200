void setup() {
  Serial.begin(9600);
}

long i = 0;
void loop() {
  i++;
  Serial.print(i);
  Serial.print(": ");
  Serial.println(digitalRead(13));
  delay(1000);
}
