// here the main purpose of interface is that if something implements in the class it should be impleted by the defined pattern

interface TrackUser {
  isOnline: boolean;
  age: number;
  name: string;
  isAdBlockerOff: true;

  showAddBlockPopup(): string;
}

class Facebook implements TrackUser {
  isOnline: boolean;
  age: number;
  name: string;
  isAdBlockerOff: true;

  constructor(
    isOnline: boolean,
    age: number,
    name: string,
    isAdBlockerOff: true
  ) {
    this.isOnline = isOnline;
    this.age = age;
    this.name = name;
    this.isAdBlockerOff = isAdBlockerOff;
  }

  showAddBlockPopup() {
    return "please off your adblock otherwise we will not be able to track you";
  }
}
