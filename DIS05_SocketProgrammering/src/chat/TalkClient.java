package chat;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.Socket;

public class TalkClient {

    public static void main(String[] args) throws Exception {
        Socket conn = null;
        BufferedReader inBuffer = new BufferedReader(new InputStreamReader(System.in));
        DataOutputStream connOut;
        BufferedReader connBuffer;

        while (conn == null) {
            conn = new Socket(inBuffer.readLine(), 6789);
            if (!conn.isBound()) conn = null;
        }

        connOut = new DataOutputStream(conn.getOutputStream());
        connBuffer = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        System.out.println("Established connection with: " + conn.getInetAddress() + ". Commence communications!...");

        while (true) {
            connOut.writeBytes(inBuffer.readLine() + "\n");
            System.out.println(conn.getInetAddress() + " says: " + connBuffer.readLine());
        }
    }

}
