// VehicleShowRoom.java
public class VehicleShowRoom {
    public static void main(String[] args) {
        Car car = new Car("BMW", 2);
        Yacht yacht = new Yacht("Yamaha", 25);

        // Display Info about Vehicles

        System.out.println("Car Info:");
        car.displayinfo();
        car.start();
        car.stop();

        System.out.println("\nYacht Info:");
        yacht.displayinfo();
        yacht.start();
        yacht.stop();
    }
}