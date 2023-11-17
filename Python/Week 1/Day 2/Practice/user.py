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