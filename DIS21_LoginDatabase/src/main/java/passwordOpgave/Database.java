package passwordOpgave;

import com.google.common.hash.Hashing;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import org.bson.Document;

import java.nio.charset.StandardCharsets;

public class Database {

    private MongoCollection<Document> usersCollection;

    public void connect() {
        System.out.println("Connecting...");
        MongoClient mongoClient = MongoClients.create("mongodb+srv://jonas:1234@dmu3-4gzrm.mongodb.net/dis21?retryWrites=true");
        MongoDatabase mongoDatabase = mongoClient.getDatabase("dis21");
        usersCollection = mongoDatabase.getCollection("user");
    }

    public void addUser(String username, String password) {
        String hashPass = hashString(password);
        Document userDoc = new Document("username", username).append("password", hashPass);
        usersCollection.insertOne(userDoc);
    }

    public boolean matchPassword(String username, String password) {
        String hashPass = hashString(password);
        String userPass = getPassword(username);

        if (userPass == null) return false;

        if (userPass.equals(hashPass)) return true;

        return false;
    }

    private String getPassword(String username) {
        for (Document user : usersCollection.find()) {
            if (user.getString("username").equalsIgnoreCase(username)) {
                return user.getString("password");
            }
        }

        return null;
    }

    private String hashString(String str) {
        return Hashing.sha256().hashString(str, StandardCharsets.UTF_8).toString();
    }

}
