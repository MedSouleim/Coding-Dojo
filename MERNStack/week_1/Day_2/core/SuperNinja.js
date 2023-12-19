class Ninja {
    constructor( name ){
        this.name = name; 
        this.health = 90 ;
        this.stength = 3 ;
        this.speed = 3 ;
    }
    drinksake(){
        this.health += 10;
        return this
    }
    showStats(){
        console.log(`${this.name},${this.health},${this.stength},${this.speed}`);
        return this
    }
}
class SuperNinja extends Ninja {
    constructor (name){
        super(name)
        this.health = 200 ;
        this.strength = 10 ; 
        this.speed = 10 ; 
        this.wisdom = 10 ; 
    }
    speakwisdom(){
        this.drinksake();
        console.log( "What one programmer can do in one month, two programmers can do in two months.")
    }
}
// example output
const sensei = new SuperNinja("Master Splinter");
sensei.speakwisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
sensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10