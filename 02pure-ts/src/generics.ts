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
