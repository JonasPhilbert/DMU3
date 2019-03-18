package smart;

import java.net.InetAddress;

public class EUDP {

    public static void SendDatagram(InetAddress address, int port, String message)  {
        byte[] send = message.getBytes();
    }

}
