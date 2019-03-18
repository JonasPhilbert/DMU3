package discord;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.Socket;

public class Application {

    public static boolean isServer = false;

    public static void main(String[] args) throws Exception {
        Socket connection;
        BufferedReader sin = new BufferedReader(new InputStreamReader(System.in));

        if (isServer) {
            ServerSocket handshaker = new ServerSocket(9876);
            System.out.println("Communication link server running on: " + InetAddress.getByName("localhost"));
            connection = handshaker.accept();
        } else {
            System.out.print("Enter IP: ");
            connection = new Socket(sin.readLine(), 9876);
        }

        if (connection.isConnected()) {
            commenceCommunication(connection, sin);
        } else {
            main(args);
        }
    }

    private static void commenceCommunication(Socket connection, BufferedReader sin) throws Exception {
        System.out.println("Communication link established with: " + connection.getInetAddress());
        Sender sender = new Sender(connection);
        Receiver receiver = new Receiver(connection);
        sender.start();
        receiver.start();

        try {
            sender.join();
            receiver.join();
        } catch (InterruptedException e) {
            System.out.println("Encountered InterruptedException e");
        }
    }

}
