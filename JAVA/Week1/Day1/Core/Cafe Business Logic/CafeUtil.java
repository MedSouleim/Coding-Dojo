import java.util.ArrayList;

public class CafeUtil {

    public int getStreakGoal() {
        int sum = 0;

        for (int i = 1; i <= 10; i++) {
            sum += i;
        }

        return sum;
    }

    public double getOrderTotal(double[] prices) {
        double total = 0.0;

        for (double price : prices) {
            total += price;
        }

        return total;
    }

    public void printMenuItems(ArrayList<String> menuItems) {
        for (int i = 0; i < menuItems.size(); i++) {
            String menuItem = menuItems.get(i);
            System.out.println(i + " " + menuItem);
        }
    }

    public void displayMenu(ArrayList<String> menuItems) {
        System.out.println("----- Cafe Menu -----");
        printMenuItems(menuItems);
    }

    public void addCustomer(ArrayList<String> customers) {

        System.out.println("Please enter your name:");

        String username = System.console().readLine();

        // Print a greeting message
        System.out.println("Hello, " + username + "!");

        int peopleAhead = customers.size();
        System.out.println("There are " + peopleAhead + " people in front of you.");


        customers.add(username);


        System.out.println("Customers list: " + customers);
    }

    public static void main(String[] args) {
        CafeUtil cafeUtil = new CafeUtil();

        System.out.println("\n----- Streak Goal Test -----");
        System.out.printf("Purchases needed by week 10: %s \n\n", cafeUtil.getStreakGoal());

        System.out.println("----- Order Total Test -----");
        double[] lineItems = {3.5, 1.5, 4.0, 4.5};
        System.out.printf("Order total: %s \n\n", cafeUtil.getOrderTotal(lineItems));

        System.out.println("----- Display Menu Test -----");
        ArrayList<String> menuItems = new ArrayList<>();
        menuItems.add("drip coffee");
        menuItems.add("cappuccino");
        menuItems.add("latte");
        menuItems.add("mocha");
        cafeUtil.displayMenu(menuItems);


        ArrayList<String> customers = new ArrayList<>();
        cafeUtil.addCustomer(customers);
    }
}
