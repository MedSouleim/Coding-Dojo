class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        if (target instanceof Unit) {
            target.res -= this.attack;
            return target
        }
        else {
            throw new Error("Target must be a unit!");
        }
    }
}
class Effects extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (target instanceof Unit) {
            if(this.stat==="resilience"){
                target.res+=this.magnitude;
            }
            else if(this.stat==="power"){
                target.power+=this.magnitude;
            }
            return target
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}