class User {
  name: string;
  email: string;

  // i can also use define properties without type
  /*    name
        email 
           */

  private shouldPrivate: string;
  readonly isAdult: boolean = false;
  // if we need to pass data in the constructor then we have again define these properties with types
  constructor(name: string, email: string) {
    this.email = email;
    this.name = name;
    this.isAdult = true;
    this.shouldPrivate = "this is private mall";
  }
}

const ali = new User("ali", "alih");
console.log(ali);

// a better way to write public and private props
class User2 {
  constructor(public name: string, private isRich: boolean = false) {
    (this.name = name), (this.isRich = isRich);
  }

  // getter
  get getName() {
    return this.name;
  }

  // setter
  // a setter never anything in typescript
  set setName(name: string) {
    this.name = name;
    this.isRich;
  }
}

const ali2 = new User2("ali", true);
console.log(ali2);

// private property of the class cannot be inherited in  the child class  but protected properties can be inherited in classes but cannot be used outside the class
