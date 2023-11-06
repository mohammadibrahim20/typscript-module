{
  // oop-class

  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}
    makeSound() {
      console.log(`the ${this.name} says ${this.sound}`);
    }
  }
  const dog = new Animal("German Shepard Bai", "Dog", "Ghew Ghew");

  const cat = new Animal("Persian vai", "Cat", "Miew Miew");
  console.log(dog);
  dog.makeSound();
}
