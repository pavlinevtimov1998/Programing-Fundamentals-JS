function cats(array) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  let cats = [];
  for (let element of array) {
    let [name, age] = element.split(" ");
    let cat = new Cat(name, age);
    console.log(typeof cat);
    cats.push(cat);
  }

  for (let cat of cats) {
    cat.meow();
  }
}
cats(["Mellow 2", "Tom 5"]);
cats(["Candy 1", "Poppy 3", "Nyx 2"]);
