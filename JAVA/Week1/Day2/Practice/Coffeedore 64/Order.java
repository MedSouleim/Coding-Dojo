import java.util.ArrayList;

public class Order {
    private String customerName;
    private ArrayList<Item> items;


    public Order(String customerName) {
        this.customerName = customerName;
        this.items = new ArrayList<>();
    }

    public String getCustomerName() {
        return customerName;
    }

    public ArrayList<Item> getItems() {
        return items;
    }

    public void addItem(Item item) {
        items.add(item);
    }

    public double calculateTotal() {
        double total = 0;
        for (Item item : items) {
            total += item.getPrice();
        }
        return total;
    }
}
