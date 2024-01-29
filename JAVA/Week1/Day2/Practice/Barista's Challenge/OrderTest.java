public class OrderTest {
    public static void main(String[] args) {
        // Testing

        // Create 2 orders for unspecified guests
        Order order1 = new Order();
        Order order2 = new Order();

        // Create 3 orders with names
        Order order3 = new Order("John");
        Order order4 = new Order("Jane");
        Order order5 = new Order("Doe");

        // Add items to orders
        order1.addItem(new Item("Drip Coffee", 1.50));
        order1.addItem(new Item("Cappuccino", 3.50));

        order2.addItem(new Item("Espresso", 2.00));
        order2.addItem(new Item("Latte", 4.00));

        order3.addItem(new Item("Mocha", 3.75));
        order3.addItem(new Item("Chai Latte", 3.00));

        order4.addItem(new Item("Americano", 2.50));
        order4.addItem(new Item("Flat White", 4.25));

        order5.addItem(new Item("Hot Chocolate", 3.25));
        order5.addItem(new Item("Macchiato", 2.75));

        // Set some orders to ready
        order1.setReady(true);
        order3.setReady(true);

        // Print status messages
        System.out.println(order1.getStatusMessage());
        System.out.println(order2.getStatusMessage());
        System.out.println(order3.getStatusMessage());
        System.out.println(order4.getStatusMessage());
        System.out.println(order5.getStatusMessage());

        // Print order totals
        System.out.println("Order 1 Total: $" + order1.getOrderTotal());
        System.out.println("Order 2 Total: $" + order2.getOrderTotal());
        System.out.println("Order 3 Total: $" + order3.getOrderTotal());
        System.out.println("Order 4 Total: $" + order4.getOrderTotal());
        System.out.println("Order 5 Total: $" + order5.getOrderTotal());

        // Display order information
        order1.display();
        order2.display();
        order3.display();
        order4.display();
        order5.display();
    }
}
