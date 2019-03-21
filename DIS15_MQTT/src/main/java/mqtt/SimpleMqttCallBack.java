package mqtt;

import org.eclipse.paho.client.mqttv3.IMqttDeliveryToken;
import org.eclipse.paho.client.mqttv3.MqttCallback;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.json.JSONObject;

public class SimpleMqttCallBack implements MqttCallback {
    int status = 0;
    public void connectionLost(Throwable throwable) {
        System.out.println("Connection to MQTT broker lost!");
    }

    public void messageArrived(String s, MqttMessage mqttMessage) throws Exception {
        String res= new String(mqttMessage.getPayload());
        // res indeholder en måling som et JSON-object

        JSONObject jo = new JSONObject(res);
        JSONObject joSensor = jo.getJSONObject("AM2301");
        double temp = joSensor.getDouble("Temperature");
        double humi = joSensor.getDouble("Humidity");
        System.out.println("Temp: " + joSensor.getDouble("Temperature"));
        System.out.println("Humi: " + joSensor.getDouble("Humidity"));

        Main.receivedReading(temp, humi);
    }

    public void deliveryComplete(IMqttDeliveryToken iMqttDeliveryToken) {
        // not used in this example
    }
}