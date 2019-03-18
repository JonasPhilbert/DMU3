package opgave01;

public class Main {

    public static String buffer = "";

    public static void main(String[] args) {
        Reader reader = new Reader();
        Writer writer = new Writer();

        reader.start();
        writer.start();
    }

}