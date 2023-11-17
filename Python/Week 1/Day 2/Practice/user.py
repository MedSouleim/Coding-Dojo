class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0

    def display_info(self):
        print("First Name:", self.first_name)
        print("Last Name:", self.last_name)
        print("Email:", self.email)
        print("Age:", self.age)
        print("Rewards Member:", self.is_rewards_member)
        print("Gold Card Points:", self.gold_card_points)

    def enroll(self):
        self.is_rewards_member = True
        self.gold_card_points = 200

    def spend_points(self, amount):
        if amount <= self.gold_card_points:
            self.gold_card_points -= amount
            print(f"{amount} points spent. Remaining points: {self.gold_card_points}")
        else:
            print("Insufficient points to spend.")

user1 = User("Itachi", "Uchiha", "Itachi@example.com", 30)
user1.display_info()

user1.enroll()
user1.display_info()