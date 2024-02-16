// type narrowing checking for types

function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

// checking for null
function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

// in opoerator narrowing
interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccounts(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

// type narrowing for instances
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// checking or certain methods in the object
type Fish = { swim: () => void };
type Bird = { fly: () => void };

//  This function returns a boolean indicating whether the provided pet is a Fish. The (pet is Fish) syntax is a user-defined type guard, indicating that within the body of this function, TypeScript should narrow the type of pet to Fish if the condition is met

// here pet will be fish if the condition is true

function isFish(pet: Fish | Bird): pet is Fish {
  // This line checks if the pet object has a swim method by attempting to access it using the (pet as Fish) type assertion. If the swim method is not undefined, it means the pet is a Fish, and the function returns true; otherwise, it returns false.
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "bird Food";
  }
}

// For handling new interfaces
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

interface cube {
  kind: "cube";
}

type Shape = Circle | Square | Rectangle;

// union descremint
function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  //return shape.side * shape.side
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.length * shape.width;

    // default will run if any of the upper case will not match

    // Ts will throw error if new interface is added and its is not handled
    // the logic is that if new interfaces is added and its case is not handled then default will run . and default is type of never which mean it should never be assign and then we are returning just undefined
    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}
