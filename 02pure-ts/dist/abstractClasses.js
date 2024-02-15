"use strict";
// abstract classes cannot make objects of their own they just help providing the structure in which class should implent
// abstrat classes are similar to interfaces but interfaces only contain what structure should be but in abstact classes we can also define method implemantion and overwrite it if we want define properties according to private,procted etc
// Abstract classes can contain both abstract and non-abstract methods. Abstract methods have no implementation in the abstract class and must be implemented by derived classes.
class MakeGames {
    constructor(gameName, programmingLanguage, studio, profit) {
        this.gameName = gameName;
        this.programmingLanguage = programmingLanguage;
        this.studio = studio;
        this.profit = profit;
    }
    // Non-abstract method
    writeCode() {
        console.log("Writing code...");
    }
}
// and i still cannot able to access the private props and methods
class GTA extends MakeGames {
    constructor(gameName, programmingLanguage, studio, profit) {
        super(gameName, programmingLanguage, studio, profit);
    }
    nextVersionRelase() {
        return "Will release in 2025";
    }
    // Overriding writeCode method with the same signature
    writeCode() {
        console.log("Writing code in C++ for GTA...");
    }
}
