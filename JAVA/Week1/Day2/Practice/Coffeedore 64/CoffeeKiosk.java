import java.util.ArrayList;

public class CoffeeKiosk {
    private ArrayList<Item> menu;
    private ArrayList<Order> orders;

    public CoffeeKiosk() {
        this.menu = new ArrayList<>();
        this.orders = new ArrayList<>();
    }

    public void addMenuItem(String name, double price) {
        Item newItem = new Item(name, price);
        newItem.setIndex(menu.size());
        menu.add(newItem);
    }

    public void displayMenu() {
        for (Item item : menu) {
            System.out.println(item.getIndex() + " " + item.getName() + " -- $" + item.getPrice());
        }
    }

    public void newOrder() {
        System.out.println("Please enter customer name for new order:");
        String name = System.console().readLine();
        Order newOrder = new Order(name);

        System.out.println("Menu:");
        displayMenu();

        System.out.println("Please enter a menu item index or q to quit:");
        String itemNumber = System.console().readLine();

        while (!itemNumber.equals("q")) {
            try {
                int index = Integer.parseInt(itemNumber);
                if (index >= 0 && index < menu.size()) {
                    Item selectedItem = menu.get(index);
                    newOrder.addItem(selectedItem);
                    System.out.println("Added " + selectedItem.getName() + " to the order.");
                } else {
                    System.out.println("Invalid menu item index. Please try again.");
                }
            } catch (NumberFormatException e) {
                System.out.println("Invalid input. Please enter a menu item index or q to quit.");
            }

            System.out.println("Please enter a menu item index or q to quit:");
            itemNumber = System.console().readLine();
        }

        System.out.println("Order Details for " + newOrder.getCustomerName() + ":");
        for (Item item : newOrder.getItems()) {
            System.out.println(item.getName() + " -- $" + item.getPrice());
        }
        System.out.println("Total: $" + newOrder.calculateTotal());

        orders.add(newOrder);
    }

    public void addMenuItemByInput() {
        System.out.println("Enter the name of the new menu item:");
        String name = System.console().readLine();

        System.out.println("Enter the price of the new menu item:");
        try {
            double price = Double.parseDouble(System.console().readLine());
            addMenuItem(name, price);
            System.out.println(name + " added to the menu.");
        } catch (NumberFormatException e) {
            System.out.println("Invalid input. Please enter a valid price.");
        }
    }

    public static void main(String[] args) {
        CoffeeKiosk kiosk = new CoffeeKiosk();

        kiosk.addMenuItem("banana", 2.00);
        kiosk.addMenuItem("coffee", 1.50);
        kiosk.addMenuItem("latte", 4.50);
        kiosk.addMenuItem("cappuccino", 3.00);
        kiosk.addMenuItem("muffin", 4.00);

        kiosk.displayMenu();

        kiosk.newOrder();

        kiosk.addMenuItemByInput();
    }
}
