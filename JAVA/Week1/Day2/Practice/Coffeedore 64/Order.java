import java.util.ArrayList;

public class Order {
    private ArrayList<Item> menu;
    private ArrayList<Order> orders;

    // Constructor
    public Order() {
        this.menu = new ArrayList<>();
        this.orders = new ArrayList<>();
    }

    // Method to add a new menu item
    public void addMenuItem(String name, double price) {
        Item newItem = new Item(name, price);
        newItem.setIndex(menu.size()); // Set index as the position in the menu array
        menu.add(newItem);
    }

    // Method to display the menu
    public void displayMenu() {
        for (Item item : menu) {
            System.out.println(item.getIndex() + " " + item.getName() + " -- $" + item.getPrice());
        }
    }

    // Method to create a new order
    public void newOrder() {
        System.out.println("Please enter customer name for new order:");
        String name = System.console().readLine();

        Order newOrder = new Order(name);

        System.out.println("Please enter a menu item index or q to quit:");
        String itemNumber = System.console().readLine();

        while (!itemNumber.equals("q")) {
            try {
                int index = Integer.parseInt(itemNumber);
                if (index >= 0 && index < menu.size()) {
                    Item chosenItem = menu.get(index);
                    newOrder.addItem(chosenItem);
                } else {
                    System.out.println("Invalid menu item index. Please try again.");
                }
            } catch (NumberFormatException e) {
                System.out.println("Invalid input. Please enter a valid menu item index or q to quit.");
            }

            System.out.println("Please enter a menu item index or q to quit:");
            itemNumber = System.console().readLine();
        }

        orders.add(newOrder);

        System.out.println("Order details:");
        System.out.println(newOrder.toString());
    }

    // Ninja Bonus: Method to add menu items manually
    public void addMenuItemByInput() {
        System.out.println("Enter the name of the new menu item:");
        String name = System.console().readLine();

        System.out.println("Enter the price of the new menu item:");
        String priceStr = System.console().readLine();

        try {
            double price = Double.parseDouble(priceStr);
            addMenuItem(name, price);
            System.out.println(name + " has been added to the menu.");
        } catch (NumberFormatException e) {
            System.out.println("Invalid price. Please enter a valid number.");
        }
    }
}
