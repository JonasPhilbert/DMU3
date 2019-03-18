package chat;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

public class TalkServer {


    public static void main(String[] args) throws Exception {
        ServerSocket socket = new ServerSocket(6789);

        Socket conn = socket.accept();
        BufferedReader inBuffer = new BufferedReader(new InputStreamReader(System.in));
        BufferedReader connBuffer = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        DataOutputStream connOut = new DataOutputStream(conn.getOutputStream());
        System.out.println("Established connection with: " + conn.getInetAddress() + ". Commence communications!...");

        Scanner scan = new Scanner(conn.getInputStream());
        while (true) {
            System.out.println(conn.getInetAddress() + " says: " + connBuffer.readLine());

            connOut.writeBytes(inBuffer.readLine() + "\n");
        }
    }

}
