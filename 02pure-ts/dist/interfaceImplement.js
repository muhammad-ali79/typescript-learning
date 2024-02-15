"use strict";
// here the main purpose of interface is that if something implements in the class it should be impleted by the defined pattern
class Facebook {
    constructor(isOnline, age, name, isAdBlockerOff) {
        this.isOnline = isOnline;
        this.age = age;
        this.name = name;
        this.isAdBlockerOff = isAdBlockerOff;
    }
    showAddBlockPopup() {
        return "please off your adblock otherwise we will not be able to track you";
    }
}
