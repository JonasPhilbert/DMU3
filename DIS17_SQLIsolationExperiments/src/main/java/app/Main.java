package app;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class Main {

    private static final String databaseName = "andebank";

    private static Connection connection;
    private static Statement statement;

    public static void main(String[] args) throws Exception {
        try {
            // General setup for MSSQL.
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            connection = DriverManager.getConnection("jdbc:sqlserver://localhost\\SQLEXPRESS;databaseName=" + databaseName + ";user=sa;password=1116;");
            statement = connection.createStatement();
        } catch (Exception e) {
            System.out.println("Database connection error: " + e.getMessage());
            e.printStackTrace();
        }

        ResultSet results = statement.executeQuery("select * from Kunde");
        System.out.println(results);
    }

}
