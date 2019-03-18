package discord;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;

public class Receiver extends Thread {

    private Socket connection;

    public Receiver(Socket connection) {
        this.connection = connection;
    }

    @Override
    public void run() {
        BufferedReader connIn = null;
        try {
            connIn = new BufferedReader(new InputStreamReader(connection.getInputStream()));

            while (true) {
                System.out.println(connection.getInetAddress().getHostAddress() + " says: " + connIn.readLine());
            }
        } catch (IOException e) {
            System.out.println("Encountered IOException.");
        }
    }
}
