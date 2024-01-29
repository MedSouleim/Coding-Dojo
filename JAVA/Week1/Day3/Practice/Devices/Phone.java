public class Phone extends Device {
    public void makeCall() {
        System.out.println("You make a call.");
        this.battery -= 5;
        status();
        if (this.battery < 10) {
            System.out.println("Battery critical!");
        }
    }

    public void playGame() {
        if (this.battery >= 25) {
            System.out.println("You play a game.");
            this.battery -= 20;
            status();
            if (this.battery < 10) {
                System.out.println("Battery critical!");
            }
        } else {
            System.out.println("Not enough battery to play a game.");
        }
    }

    public void charge() {
        System.out.println("You charge the phone.");
        this.battery += 50;
        if (this.battery > 100) {
            this.battery = 100;
        }
        status();
    }
}

