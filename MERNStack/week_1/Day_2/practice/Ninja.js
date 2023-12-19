class Ninja {
    constructor( name ){
        this.name = name; 
        this.health = 90 ;
        this.stength = 3 ;
        this.speed = 3 ;
    }
    sayName(){
        console.log(`${this.name}`);
        return this;
    }
    showStats(){
        console.log(`${this.name},${this.health},${this.stength},${this.speed}`);
        return this
    }
    drinksake(){
        this.health += 10;
        return this
    }
}
const lionardo = new Ninja ('lionardo')
lionardo.sayName().showStats().drinksake().showStats()
