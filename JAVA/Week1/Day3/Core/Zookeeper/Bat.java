public class Bat extends Mammal {
    public Bat() {
        this.energy = 300;
    }

    public int fly() {
        System.out.println("Bat is airborne!");
        energy -= 50;
        return displayEnergy();
    }

    public int eatHumans() {
        System.out.println("Bat is satisfied after eating humans!");
        energy += 25;
        return displayEnergy();
    }

    public int attackTown() {
        System.out.println("Bat is attacking the town!");
        energy -= 100;
        return displayEnergy();
    }
}
