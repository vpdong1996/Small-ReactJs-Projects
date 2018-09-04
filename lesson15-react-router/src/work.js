// const myArray = ["hello", "my", "name", "is", "Henry"];

// const result = myArray.map((item,index) =>{
//   return {
//     id : index,
//     word : item
//   }
// })
// console.log(result);

class Animal {
  constructor(type,skincolor){
    this.type = type;
    this.skincolor = skincolor;
    }
    callAnimal(){
      console.log(`${this.type} có bộ da màu ${this.skincolor}`)
    }
  //   set setFullType(type,skincolor){
  //     this.type = type;
  //     this.skincolor = skincolor;
  // }
  //   get setFullType(){
  //     return `This Animal has ${}`
  //   }
}

class Dog extends Animal{
  constructor(type,skincolor,sua){
    super(type,skincolor);
    this.sua = sua;
  };
  
  callSua(){
    super.callAnimal() + console.log(this.sua)
  }
}

let Chihuahua = new Dog('Chó Chi','đen','Gau Gau');
Chihuahua.callSua();

class Cat { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + ' roars.');
  }
}

var l = new Lion('Fuzzy');
l.speak(); 
// Fuzzy makes a noise.
// Fuzzy roars.