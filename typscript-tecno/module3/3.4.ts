{
  // instanceof guard
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("i am making sound");
    }
  }
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("i am Barking");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMiew() {
      console.log("i am Mewaing");
    }
  }

  // smart way handle using functions

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMiew();
    } else {
      animal.makeSound();
    }
  };
  const dog = new Dog("dog bai", "dog");
  const cat = new Cat("cat bai", "cat");
  getAnimal(dog);
  getAnimal(cat);

  //
}
