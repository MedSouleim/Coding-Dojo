public class Gorilla extends Mammal {
    public int throwSomething() {
        System.out.println("Gorilla has thrown something!");
        energy -= 5;
        return displayEnergy();
    }

    public int eatBananas() {
        System.out.println("Gorilla is satisfied after eating bananas!");
        energy += 10;
        return displayEnergy();
    }

    public int climb() {
        System.out.println("Gorilla has climbed a tree!");
        energy -= 10;
        return displayEnergy();
    }
}

