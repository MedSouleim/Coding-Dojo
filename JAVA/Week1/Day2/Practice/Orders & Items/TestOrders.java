public class TestOrders {
    public static void main(String[] args) {

        // Create menu items
        Item item1 = new Item("mocha", 3.99);
        Item item2 = new Item("latte", 4.49);
        Item item3 = new Item("drip coffee", 2.99);
        Item item4 = new Item("cappuccino", 4.99);

        // Create order variables
        Order order1 = new Order("Cindhuri");
        Order order2 = new Order("Jimmy");
        Order order3 = new Order("Noah");
        Order order4 = new Order("Sam");

        // Print order1 variable
        System.out.println("Printing order1 variable:");
        System.out.println(order1); // This will print the default toString() representation of the Order object

        // Predict what will happen if you print 'order1.total'
        System.out.println("Order1 Total: " + order1.total); // It will print the default value for double (0.0)

        // Add item1 to order2's item list and increment the order's total
        order2.items.add(item1);
        order2.total += item1.price;

        // Noah ordered a cappuccino. Add the cappuccino to their order list and to their tab.
        order3.items.add(item4);
        order3.total += item4.price;

        // Sam added a latte. Update the order accordingly.
        order4.items.add(item2);
        order4.total += item2.price;

        // Cindhuri’s order is now ready. Update her status.
        order1.ready = true;

        // Sam ordered more drinks - 2 lattes. Update their order as well.
        for (int i = 0; i < 2; i++) {
            order4.items.add(item2);
            order4.total += item2.price;
        }

        // Jimmy’s order is now ready. Update his status.
        order2.ready = true;

        // Display information for order1
        System.out.printf("Name: %s\n", order1.name);
        System.out.printf("Total: %.2f\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);
    }
}
