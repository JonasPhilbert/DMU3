package opgave01;

import java.util.Scanner;

public class Reader extends Thread {

    @Override
    public void run() {
        Scanner scan = new Scanner(System.in);

        while (scan.hasNextLine())
            Main.buffer = scan.nextLine();

        System.out.println("Stopping scanner...");

        scan.close();
    }
}
