package dns;

import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

public class ServerApp {

    public static void main(String[] args) throws Exception {

        RecordList records = new RecordList();
        records.addRecord("peter", "10.24.66.191");
        records.addRecord("jonas", "10.24.64.255");

        DatagramSocket connection = new DatagramSocket(9876);
        byte[] receiveData = new byte[1024];
        byte[] sendData = new byte[1024];

        while (true) {
            DatagramPacket incomingPacket = new DatagramPacket(receiveData, receiveData.length);
            connection.receive(incomingPacket);
            String query = new String(incomingPacket.getData());

            InetAddress ip = incomingPacket.getAddress();
            int port = incomingPacket.getPort();

            String queryResult = records.getDestination(query.trim());
            System.out.println(query + " results in " + queryResult);
            sendData = queryResult.getBytes();
            DatagramPacket outgoingPacket = new DatagramPacket(sendData, sendData.length, ip, port);
            connection.send(outgoingPacket);
        }

    }

}
