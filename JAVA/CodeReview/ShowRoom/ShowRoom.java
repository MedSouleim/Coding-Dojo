// ShowRoom.java
abstract class ShowRoom implements Vehicle {
    private String brand;

    // constructor
    public ShowRoom(String brand) {
        this.brand = brand;
    }

    public void displayinfo() {
        System.out.println("Brand: " + brand);
    }
}