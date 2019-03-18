package dns;

import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

public class ClientApp {

    public static void main(String[] args) throws Exception {
        DatagramSocket connection = new DatagramSocket(9876);
        byte[] out = "jonas".getBytes();
        byte[] inBuffer = new byte[1024];
        DatagramPacket request = new DatagramPacket(out, out.length, InetAddress.getByName("10.24.66.191"), 9876);
        connection.send(request);

        DatagramPacket received = new DatagramPacket(inBuffer, inBuffer.length);
        connection.receive(received);
        String receivedStr = new String(received.getData());
        System.out.println(receivedStr.trim());
    }

}
