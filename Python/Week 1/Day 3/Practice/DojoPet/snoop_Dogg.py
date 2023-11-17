from pet import Pet
class snoop_Dogg(Pet) :
    def __init__(self, name, tricks):
        super().__init__(name, snoop_Dogg, tricks)

Dog1 = snoop_Dogg("Loo", ["swim","sleep"])

Dog1.noise()