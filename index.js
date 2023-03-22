/* The code defines a class Pokemon that has properties name, health, magic, and skills. It also defines a class AttackSkill that has properties attackName, damage, and the  body of this class "Pokemon" have many methods inside it,which are: learn attack skill,showStatus, Attack, get Magic, and also Attack Skill
*/
class Pokemon {
  constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
  }
  /* The learnAttackSkill method takes an AttackSkill object as an argument and adds it to the skills property of the Pokemon object. It also prints a message indicating that the Pokemon has learned the new attack. */
  learnAttackSkill(skill) {
    this.skills.push(skill);
    console.log(`${this.name} learned ${skill.attackName}`)
  }
  /*here as we can see we have another method which well show us the main status of each Pokemon we want and thats simple by console.log the information we want by using backticks method and pointing to elements we want from Pokemon class. */
  showStatus() {
    console.log(
      `Pokemon name:${this.name} health is ${this.health} and have magic:${this.magic}`
    );
  }

  /*The attack method takes another Pokemon object and an AttackSkill object as arguments. It first checks if the attacking Pokemon has enough magic to use the attack skill. If it does, it deducts the appropriate amount of magic and damage from the attacking Pokemon and the attacked Pokemon, respectively. It also prints messages indicating the actions taken and the resulting damage and remaining health and magic. If the attacked Pokemon's health reaches zero or below, a message is printed indicating that it has fainted.

  */
  attack(Pokemon, skill) {
    if (this.magic < skill.magic) {
      console.log(
        `${this.name} does not have enough magic to use ${skill.name}`
      );
    } else {
      console.log(`${this.name} is attacking ${Pokemon.name}.`);
      Pokemon.health -= skill.damage;
      this.magic -= skill.magic;
      console.log(
        `${skill.attackName} deals ${skill.damage} damage to ${Pokemon.name}.`
      );
      console.log(`${this.name} has ${this.magic} magic left.`);
      console.log(`${Pokemon.name} has ${Pokemon.health} health left.`);
      if (Pokemon.health <= 0) {
        console.log(`${Pokemon.name} has fainted.`);
      }
    }
  }
  /*the get magic method funny and can make change in the game, the get magic well allow the pokemon to regain the magic and by using conditional statements we can limit it for the Pokemons are have less than 30 of its actual magic points.by the way thanks Adam by making it simple  */
  getMagic(add){
    if(this.magic < 30){
       this.magic = this.magic + add
       console.log(`Magic is add new magic is: ${this.magic}`)
    }
    else{
        console.log(`your ${this.name} have enough magic, cant add more`)
    }
  }
}
/*the attack skill this allow us to create new attack for the pokemon as the pokemon is new and have no attack or magic or even attack name still baby :) and by the previous method learn attack skill we add the attack.name from this to the skill method learnattack and know we have new attack for the baby pokemon.   */
class AttackSkill {
  constructor(attackName, damage, magic) {
    this.attackName = attackName;
    this.damage = damage;
    this.magic = magic;
  }
}




let pikachu = new Pokemon("Pikachu", 100, 50);
let lightning = new AttackSkill("lightning", 40, 30);
pikachu.learnAttackSkill(lightning);

let charmander = new Pokemon("Charmander", 80, 20);

pikachu.showStatus();
charmander.showStatus();

pikachu.attack(charmander, lightning);

pikachu.showStatus();
charmander.showStatus();
charmander.getMagic(30)
let belbasour = new Pokemon("belbasour",105,95);