package dns;

import java.util.ArrayList;

public class RecordList {

    private ArrayList<Record> records = new ArrayList<>();

    public void addRecord(String name, String destination) {
        records.add(new Record(name, destination));
    }

    public String getDestination(String name) {
        for (Record r : records) {
            if (r.name.equals(name)) return r.destination;
        }

        return "NO_RECORD";
    }

    public String getName(String destination) {
        for (Record r : records) {
            if (r.destination.equals(destination)) return r.name;
        }

        return "NO_RECORD";
    }

    private class Record {
        public String name;
        public String destination;

        public Record(String name, String destination) {
            this.name = name;
            this.destination = destination;
        }
    }
}
