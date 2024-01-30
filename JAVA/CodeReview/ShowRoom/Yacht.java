// Yacht.java
public class Yacht extends ShowRoom {
    private int length;

    // constructor
    public Yacht(String brand, int length) {
        super(brand);
        this.length = length;
    }

    public void start() {
        System.out.println("Yacht is starting");
    }

    public void stop() {
        System.out.println("Yacht is stopping");
    }

    public void displayinfo() {
        super.displayinfo();
        System.out.println("Type: Yacht");
        System.out.println("Length: " + length + " feet");
    }
}