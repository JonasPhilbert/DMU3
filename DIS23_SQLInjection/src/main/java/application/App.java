package application;
import java.sql.*;
import java.io.*;

public class App {

    public static void main(String[] args) {

        try {
            BufferedReader inLine = new
                    BufferedReader(new InputStreamReader(System.in));
            System.out.println("Indtast brugernavn");
            String s1 = inLine.readLine();
            System.out.println("Indtast password");
            String s2 = inLine.readLine();
            Connection minConnection;
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            minConnection = DriverManager.getConnection(
                    "jdbc:sqlserver://localhost\\SQ;databaseName=dis23;user=sa;password=1234;");
            Statement stmt = minConnection.createStatement();
            ResultSet res = stmt
                    .executeQuery("select * from brugere where brugerid = '" + s1 + "' and passw = '" + s2 + "'");
            if (res.next()) {
                System.out.print("Velkommen du er nu logget ind");
            } else {
                System.out.print("Ukorrekt logon");
            }
            if (stmt != null) {
                stmt.close();
            }
            if (minConnection != null) {
                minConnection.close();
            }
        } catch (Exception e) {
            System.out.print("fejl:  " + e.getMessage());

        }
    }
}