package opgave01;

public class Writer extends Thread {

    @Override
    public void run() {
        while (!Main.buffer.equalsIgnoreCase("stop")) {
            try {
                Thread.sleep((long) 3000);
            } catch (InterruptedException e) {
                System.out.println("Hvad fanden laver du?");
            }

            System.out.println(Main.buffer);
            Main.buffer = "";
        }
    }

}
