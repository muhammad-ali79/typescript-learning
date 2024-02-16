// GENERICS allows the function ,class to accept arguments of any type and return the same type

function giveNames<T>(name: T, phone: T): T[] {
  return [name, phone];
}

interface user {
  name: string;
  phon: number;
}

const person = giveNames("ali", "hassan");
const users = giveNames<user>(
  { name: "ali", phon: 34 },
  { name: "hassan", phon: 34 }
);

console.log(users);

function getSearchResults<T>(produts: T[]): T[] {
  return produts;
}

const getSearchResultsArrow = <T>(products: T[]): T => {
  return products[1];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

// Type constrains
// here we extends the U to database (mean that we restrict this type to be database) that it have properties like database or more of them
// This emphasizes that U must have at least the same properties as defined in the Database interface, but it may have additional properties as well

// extends mean somethings like this that this type should be like this , it should have properties like this

// Constraints allow you to restrict the types that can be used with generics. They specify conditions that type parameters must satisfy.
function getPagination<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

getPagination("string", {
  connection: "",
  username: "",
  password: "",
});

class sellable<T> {
  // cart should contain items of type T
  public cart: T[] = [];

  addToCart(proudct: T) {
    this.cart.push(proudct);
  }
}
