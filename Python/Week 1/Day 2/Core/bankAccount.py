class BankAccount:
    list_of_account = []
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.list_of_account.append(self)
    def deposit(self, amount):
        if amount > 0 :
            self.balance += amount 
            print(f"balance:{self.balance},amount:{amount}")
        else :
            print("negative")
        return self
    def withdraw(self, amount):
        if amount <= self.balance :
            self.balance -= amount
            print(f"balance :{self.balance},amount :{amount}")
        else :
            print("Insufficient funds : Charging a $5 fee")
            self.balance -= 5
        return self
            # print(self.balance)
    def display_account_info(self):
        print(f"your balance is : {self.balance}")
    def yield_interest(self):
        if self.balance > 0 :
            interest = self.balance*self.int_rate
            self.balance += interest
            print(f"your balance now is :{self.balance}")
        return self
    @classmethod
    def allAccount (cls):
        print("all account info :")
        for account in cls.list_of_account :
            account.display_account_info()
account = BankAccount(balance = 1000 , int_rate = 0.4)
account2 = BankAccount(balance = 2000 , int_rate = 0.5)
account.deposit(200).deposit(50).deposit(300).withdraw(1500).yield_interest().display_account_info()
account2.deposit(50).withdraw(100).withdraw(400).withdraw(30).withdraw(10).yield_interest().display_account_info()
BankAccount.allAccount()
# account.withdraw(1500)
# account.display_account_info()
# account.yield_interest()

