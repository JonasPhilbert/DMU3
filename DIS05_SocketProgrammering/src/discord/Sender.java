package discord;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;

public class Sender extends Thread {

    private DataOutputStream connOut;
    private BufferedReader sin;

    public Sender(Socket connection) throws Exception {
        this.sin = new BufferedReader(new InputStreamReader(System.in));
        this.connOut = new DataOutputStream(connection.getOutputStream());
    }

    @Override
    public void run() {
        try {
            while (true) {
                connOut.writeBytes(sin.readLine() + "\n");
            }
        } catch (IOException e) {
            System.out.println("Encountered IOException.");
        }
    }
}
