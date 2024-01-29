public class BankTest {
    public static void main(String[] args) {
        // Create 3 bank accounts
        BankAccount account1 = new BankAccount(1000, 500);
        BankAccount account2 = new BankAccount(2000, 1000);
        BankAccount account3 = new BankAccount(500, 200);

        // Deposit Test
        account1.deposit(200, "checking");
        account2.deposit(300, "savings");
        account3.deposit(100, "checking");

        // Display balances after deposits
        System.out.println("Balances after deposits:");
        account1.getBalance();
        account2.getBalance();
        account3.getBalance();
        System.out.println("Total Money: " + BankAccount.getTotalMoney());

        // Withdrawal Test
        account1.withdraw(150, "savings");
        account2.withdraw(500, "checking");
        account3.withdraw(300, "savings");

        // Display balances after withdrawals
        System.out.println("\nBalances after withdrawals:");
        account1.getBalance();
        account2.getBalance();
        account3.getBalance();
        System.out.println("Total Money: " + BankAccount.getTotalMoney());

        // Static Test
        System.out.println("\nNumber of accounts: " + BankAccount.getAccounts());
        System.out.println("Total Money: " + BankAccount.getTotalMoney());
    }
}

