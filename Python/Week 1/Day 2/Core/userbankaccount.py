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
class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)
    
    
    def make_deposit(self, amount):
        self.account.deposit(amount)
        return(self)
    def make_withdraw (self, amount):
        self.account.withdraw(amount)
        return(self)
    def make_display_account_info(self):
        self.account.display_account_info()
        return(self)
    # def mak_yield_interest(self):
        # self.account.yield_interest()
        print(f"User balance is :{self.account.balance}")
        # return(self)
user1 = {
    "first_name": "Itachi",
    "last_name": "Uchiha",
    "email": "Itachi@example.com",
    "age": 30,
    "is_rewards_member": False,
    "gold_card_points": 0
}
user2 = {
    "first_name": "Sasuke",
    "last_name": "Uchiha",
    "email": "Sasuke@example.com",
    "age": 28,
    "is_rewards_member": False,
    "gold_card_points": 0
}
user3 = {
    "first_name": "Naruto",
    "last_name": "Uzumaki",
    "email": "Naruto@example.com",
    "age": 32,
    "is_rewards_member": False,
    "gold_card_points": 0
}
def display_info(user):
    print("First Name:", user["first_name"])
    print("Last Name:", user["last_name"])
    print("Email:", user["email"])
    print("Age:", user["age"])
    print("Rewards Member:", user["is_rewards_member"])
    print("Gold Card Points:", user["gold_card_points"])
    print("")
def enroll(user):
    if not user["is_rewards_member"]:
        user["is_rewards_member"] = True
        user["gold_card_points"] = 200
        print("Enrolled successfully!")
    else:
        print("Already a rewards member!")
def spend_points(user, amount):
    if amount <= user["gold_card_points"]:
        user["gold_card_points"] -= amount
        print(f"{amount} points spent. Remaining points: {user['gold_card_points']}")
    else:
        print("Insufficient points to spend.")
display_info(user1)
display_info(user2)
display_info(user3)
spend_points(user1, 50)
enroll(user2)
spend_points(user2, 80)
display_info(user1)
display_info(user2)
enroll(user1)
spend_points(user3, 40)
display_info(user1)
display_info(user2)
display_info(user3)
