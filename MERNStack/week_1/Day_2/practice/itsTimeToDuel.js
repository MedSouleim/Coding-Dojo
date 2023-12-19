class Card {
    constructor (name , cost){
        this.name = name ; 
        this.cost = cost ;
    }
}
class Unit extends Card{
    constructor (name , cost , power , res){
        super (name , cost);
        this.power = power ; 
        this.resilience = this.resilience ;
    }
    attack(target){
        if (target instanceof Unit){
            target.resilience -= this.attack ;
        }
        else{
            throw new ERROR('Target must be a unit!');
        }
    }
}
class Effect extends Card {
    constructor (name , cost , text , stat , magnitude) {
        super (name , cost );
        this.text = text ; 
        this.stat = stat ; 
        this.magnitude = magnitude ; 
    }
    play(target){
        if (target instanceof Unit){
            if (this.stat === 'resilience'){
                target.resilience += this.magnitude
            }
            else if (this.stat === 'power'){
                target.power += this.magnitude
            }
        }
        else{
            throw new ERROR('Target must be a unit!');
        }
    }
}
