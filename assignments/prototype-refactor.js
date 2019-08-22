/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// TASK 1 solution:

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }
		greet() {
			return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
		}
		eat(edible) {
			this.stomach.push(edible);
			return `mmm, what a tasty ${edible}`;
		}
		poop() {
			this.stomach = [];
			return `ahhhh...that's better`;
		}

}
  
  let me = new Person("Dom", 23);
  
  console.log(me.greet());
  console.log(me.eat("Sandwich"));
  console.log(me.stomach);
  console.log(me.poop());
  
  // TASK 2 SOLUTION:

  class Car {
      constructor(name, make) {
          this.name = name;
          this.make = make;
          this.odometer = 0;
          this.crashed = false;
      }
      drive() {
        if (this.crashed === false) {
            this.odometer += 10;
            return `vroom`;
        }
        else {
            return `fix me first!`;
        }
      }
      crash() {
        this.crashed = true;
        return `I crashed at ${this.odometer} miles!`;
      }
      repair() {
        this.crashed = false;
        return `Repaired!`;
      }
  }
  
  let myCar = new Car("Toyota", "Prius");
  console.log(myCar.drive(), myCar.odometer);
  console.log(myCar.crash());
  console.log(myCar.drive());
  console.log(myCar.repair());
  
  // TASK 3 SOLUTION: 
  
 /*  function Baby(name, age) {
    Person.call(this, name, age); 
  } */

  class Baby extends Person {
      constructor(name, age) {
          super(name, age);
      }
      play() {
          return `playing!`;
      }
  }

  var tom = new Baby('Tom', 1,);
  
  console.log(tom.greet());

  // TASK 4

  class Kitchen { 
    constuctor(name) {
      this.name = name;
      this.availableIngredients = [];
      this.isBaked = false;
      this.isBurned = false;
    }
    bake(...ingredients) {
      this.availableIngredients.push(...ingredients);
      return this.availableIngredients;
    }
    removeFromOven(dish) {
      if (!this.isBaked) {
        return `you remove your dish from the oven. It is undercooked and inedible. Try again!`;
      }
      if (this.isBaked && !this.isBurned) {
        return `you retrieve your delicious ${this.name} from the oven.`;
      }
      if (this.isBaked && this.isBurned) {
        return `you remove your dish from the oven. It is burned to a crisp. What a disaster!`;
      }
    }
  }
